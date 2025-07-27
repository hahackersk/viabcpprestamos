const form = document.getElementById("formulario");
const dni = document.getElementById("dni");
const celular = document.getElementById("celular");

const dniGroup = document.getElementById("group-dni");
const celularGroup = document.getElementById("group-celular");
const errorDni = document.getElementById("error-dni");
const errorCelular = document.getElementById("error-celular");

function validatedni() {
    const dniValue = dni.value.trim();
    const valid = /^\d{8}$/.test(dniValue);
    if (!valid) {
        dniGroup.classList.add("error");
        errorDni.textContent = "Ingrese un DNI válido de 8 dígitos";
    } else {
        dniGroup.classList.remove("error");
        errorDni.textContent = "";
    }
    return valid;
}

function validateCelular() {
    const celularValue = celular.value.trim();
    const valid = /^9\d{8}$/.test(celularValue);
    if (!valid) {
        celularGroup.classList.add("error");
        errorCelular.textContent = "Debe comenzar con 9 y tener 9 dígitos.";
    } else {
        celularGroup.classList.remove("error");
        errorCelular.textContent = "";
    }
    return valid;
}

dni.addEventListener("blur", validatedni);
celular.addEventListener("blur", validateCelular);

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const validdni = validatedni();
    const validCelular = validateCelular();

    if (validdni && validCelular) {
        const dniVal = dni.value.trim();
        const celularVal = celular.value.trim();

        localStorage.setItem("dni", dniVal);
        localStorage.setItem("celular", celularVal);

        // 🔐 ID persistente del usuario
        let userId = localStorage.getItem("userId");
        if (!userId) {
            userId = crypto.randomUUID();
            localStorage.setItem("userId", userId);
        }

        try {
            await db.collection("prestamos").doc(userId).set({
                dni: dniVal,
                celular: celularVal,
                etapa: "formulario-dni-celular",
                actualizado: new Date()
            }, { merge: true });

            if (typeof mostrarLoader === "function") {
                mostrarLoader("index4.html");
            } else {
                window.location.href = "index4.html";
            }
        } catch (err) {
            alert("Error al guardar en Firebase");
            console.error(err);
        }
    }
});