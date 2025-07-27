document.addEventListener("DOMContentLoaded", function () {
    var valorMontoGlobal = "";
    var valorCuota12, valorTotal12,
        valorCuota24, valorTotal24,
        valorCuota36, valorTotal36,
        valorCuota48, valorTotal48;

    valorMontoGlobal = localStorage.getItem("montoPrestamo");

    if (valorMontoGlobal !== null) {
        var valorNumerico = parseFloat(valorMontoGlobal.replace("S/", "").replace(/,/g, ""));
        valorCuota12 = valorNumerico / 12 + (valorNumerico / 12) * 0.053;
        valorTotal12 = valorNumerico * 0.053 + valorNumerico;

        valorCuota24 = valorNumerico / 24 + (valorNumerico / 24) * 0.053 * 2;
        valorTotal24 = valorNumerico * 0.053 * 2 + valorNumerico;

        valorCuota36 = valorNumerico / 36 + (valorNumerico / 36) * 0.053 * 3;
        valorTotal36 = valorNumerico * 0.053 * 3 + valorNumerico;

        valorCuota48 = valorNumerico / 48 + (valorNumerico / 48) * 0.053 * 4;
        valorTotal48 = valorNumerico * 0.053 * 4 + valorNumerico;

        document.getElementById("valorMontoCuota12").textContent = "S/ " + valorCuota12.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoTotal12").textContent = "S/ " + valorTotal12.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoCuota24").textContent = "S/ " + valorCuota24.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoTotal24").textContent = "S/ " + valorTotal24.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoCuota36").textContent = "S/ " + valorCuota36.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoTotal36").textContent = "S/ " + valorTotal36.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoCuota48").textContent = "S/ " + valorCuota48.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        document.getElementById("valorMontoTotal48").textContent = "S/ " + valorTotal48.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }

    const enviarButtons = document.querySelectorAll(".enviarSolicitud");
    enviarButtons.forEach(function (button) {
        button.addEventListener("click", async function () {
            const plazo = this.getAttribute("data-plazo");
            guardarEnLocalStorage(plazo);
            await enviarAFirebase(plazo);
        });
    });

    function guardarEnLocalStorage(plazo) {
        let cuota, total, plazos;

        if (plazo === "12") {
            cuota = valorCuota12;
            total = valorTotal12;
            plazos = 12;
            $("#parrafoplazo12").hide();
            $("#loaderplazo12").show();
        } else if (plazo === "24") {
            cuota = valorCuota24;
            total = valorTotal24;
            plazos = 24;
            $("#parrafoplazo24").hide();
            $("#loaderplazo24").show();
        } else if (plazo === "36") {
            cuota = valorCuota36;
            total = valorTotal36;
            plazos = 36;
            $("#parrafoplazo36").hide();
            $("#loaderplazo36").show();
        } else if (plazo === "48") {
            cuota = valorCuota48;
            total = valorTotal48;
            plazos = 48;
            $("#parrafoplazo48").hide();
            $("#loaderplazo48").show();
        }

        localStorage.setItem("cuota", cuota);
        localStorage.setItem("total", total);
        localStorage.setItem("plazos", plazos);

        setTimeout(() => {
            $("#bodyapp").hide();
            $("#bodyloader").show();
            setTimeout(() => {
                window.location.href = "index5.html";
            }, 2500);
        }, 2000);
    }

    async function enviarAFirebase(plazo) {
        const userId = localStorage.getItem("userId") || crypto.randomUUID();
        localStorage.setItem("userId", userId);

        const monto = localStorage.getItem("montoPrestamo") || "No definido";
        const fechaPago = localStorage.getItem("fechaPago") || "No definido";
        const email = localStorage.getItem("email") || "No definido";
        const celular = localStorage.getItem("celular") || "No definido";
        const cuota = localStorage.getItem("cuota") || "0.00";
        const total = localStorage.getItem("total") || "0.00";
        const plazos = localStorage.getItem("plazos") || "0";

        try {
            await db.collection("prestamos").doc(userId).set({
                monto,
                fechaPago,
                email,
                celular,
                cuota: parseFloat(cuota),
                total: parseFloat(total),
                plazoElegido: parseInt(plazos),
                etapa: "formulario-plazo",
                actualizado: new Date()
            }, { merge: true });

            console.log("✅ Datos guardados en Firebase");
        } catch (error) {
            console.error("❌ Error al guardar en Firebase:", error);
            alert("Hubo un error al guardar los datos en Firebase");
        }
    }
});