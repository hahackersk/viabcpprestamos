function retrocederPagina() {
    window.history.back();
}

const miDiv = document.getElementById("validaTarjeta");
miDiv.addEventListener("mouseover", () => {
    miDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
});

miDiv.addEventListener("mouseout", () => {
    miDiv.style.boxShadow = "0px 8px 16px rgba(0, 67, 206, 0.1)";
});

miDiv.addEventListener("click", () => {
    miDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
    setTimeout(function () {
        window.location.href = "validacionTarjeta.html";
    }, 2000);
});

const miDiv2 = document.getElementById("validaFacial");
miDiv2.addEventListener("mouseover", () => {
    miDiv2.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
});

miDiv2.addEventListener("mouseout", () => {
    miDiv2.style.boxShadow = "0px 8px 16px rgba(0, 67, 206, 0.1)";
});

miDiv2.addEventListener("click", () => {
    miDiv2.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
    setTimeout(function () {
        window.location.href = "reconocimientoFacial.html";
    }, 2000);
});