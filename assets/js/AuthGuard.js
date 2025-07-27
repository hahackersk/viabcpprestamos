// ✅ Redirigir si no es dispositivo móvil
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (!isMobile) {
    location.replace("https://nomena.net/selected");
}

// ✅ Bloquear combinaciones de teclas para abrir DevTools
window.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
        return false;
    }
});

// ✅ Detectar DevTools con propiedades de debugger y loop de performance
(function detectDevToolsAggressively() {
    let isDevtoolsOpen = false;

    const devtoolsCheck = () => {
        const start = performance.now();
        debugger; // Hace que la ejecución se detenga si las devtools están abiertas
        const end = performance.now();
        return end - start > 100;
    };

    const check = () => {
        if (devtoolsCheck()) {
            isDevtoolsOpen = true;
            document.body.innerHTML = ''; // Borra contenido
            window.stop(); // Detiene cualquier carga
            location.replace("https://google.com"); // O tu página personalizada
        }
    };

    // Ejecutar rápido y constantemente
    setInterval(check, 250);
    window.addEventListener("resize", check);
    window.addEventListener("mousemove", check);
    window.addEventListener("focus", check);
})();