// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // 🔵 1. Agrega los estilos solo para el loader
  const style = document.createElement("style");
  style.innerHTML = `
    #bodyloader {
      height: 100%;
      width: 100%;
      margin: 0;
      background-color: #002a8d;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: Arial, sans-serif;
    }

    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .spinner-wrapper {
      position: relative;
      width: 70px;
      height: 70px;
      margin-bottom: 15px;
    }

    .spinner {
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 70px;
      border: 3px solid #002376;
      border-top: 3px solid #ff7800;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .message {
      color: white;
      text-align: center;
      font-size: 14px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // 🔵 2. Agrega el HTML del loader
  const loaderHTML = document.createElement("div");
  loaderHTML.id = "bodyloader";
  loaderHTML.innerHTML = `
    <div class="spinner-container">
      <div class="spinner-wrapper">
        <div class="spinner"></div>
        <img class="spinner-icon" src="assets/img/favicon.png" alt="Ícono">
      </div>
      <p class="message">Espere un momento<br>por favor</p>
    </div>
  `;
  document.body.appendChild(loaderHTML);
});

// 🔁 Función global para mostrar el loader y redirigir
function mostrarLoader(destino) {
  const loader = document.getElementById("bodyloader");
  if (loader) {
    loader.style.display = "flex";
    setTimeout(() => {
      window.location.href = destino;
    }, 2000);
  }
}
