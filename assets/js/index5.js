document.addEventListener("DOMContentLoaded", function () {
    const valorMontoGlobal = localStorage.getItem("montoPrestamo") || "0";
    const cuota = localStorage.getItem("cuota") || "0";
    const total = localStorage.getItem("total") || "0";
    const plazos = localStorage.getItem("plazos") || "0";

    if (cuota && total) {
        const cuotaFormateada = parseFloat(cuota).toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
        });

        const totalFormateada = parseFloat(total).toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
        });

        const numerodecuotasElement = document.getElementById("numerodecuotas");
        const cuotamensualElement = document.getElementById("cuotamensual");
        const montototalElement = document.getElementById("montototal");
        const montoglobalElement = document.getElementById("montoglobal");

        if (montoglobalElement) montoglobalElement.innerHTML = valorMontoGlobal;
        if (montototalElement) montototalElement.innerHTML = totalFormateada;
        if (numerodecuotasElement) numerodecuotasElement.innerHTML = plazos;
        if (cuotamensualElement) cuotamensualElement.innerHTML = cuotaFormateada;
    }
});

async function confirmarprestamo() {
    $("#parrafoaceptoelprestamo").hide();
    $("#loaderaceptoelprestamo").show();

    // 🔐 Obtener userId persistente
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem("userId", userId);
    }

    const monto = localStorage.getItem("montoPrestamo") || "0";
    const cuota = localStorage.getItem("cuota") || "0";
    const total = localStorage.getItem("total") || "0";
    const plazos = localStorage.getItem("plazos") || "0";

    try {
        // 🔥 Guardar estado de confirmación en Firebase
        await db.collection("prestamos").doc(userId).set({
            prestamoConfirmado: true,
            monto,
            cuota: parseFloat(cuota),
            total: parseFloat(total),
            plazoElegido: parseInt(plazos),
            etapa: "confirmacion-prestamo",
            confirmadoEn: new Date()
        }, { merge: true });

        // ✅ Continuar al siguiente paso
        setTimeout(() => {
            $("#bodyapp").hide();
            $("#bodyloader").show();
            setTimeout(() => {
                window.location.href = "/pages/index6.html";
            }, 2500);
        }, 2000);
    } catch (error) {
        console.error("❌ Error al guardar confirmación en Firebase:", error);
        alert("Error al confirmar el préstamo");
    }
}

function retrocederPagina() {
    window.history.back();
}

window.confirmarprestamo = confirmarprestamo;
