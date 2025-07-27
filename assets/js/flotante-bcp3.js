document.addEventListener("DOMContentLoaded", function () {
  // Inyectar estilos del loader
  const style = document.createElement("style");
  style.innerHTML = `
    #bodyloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #002a8d;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 9999;
      font-family: Arial, sans-serif;
    }

    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .spinner-wrapper {
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 18px;
    }

    .spinner {
      width: 80px;
      height: 80px;
      border: 4px solid #002376;
      border-top: 4px solid #ff7800;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 44px;
      height: 44px;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .message {
      color: #ffffff;
      text-align: center;
      font-size: 15px;
      line-height: 1.4;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Inyectar HTML del loader
  const loader = document.createElement("div");
  loader.id = "bodyloader";
  loader.innerHTML = `
    <div class="spinner-container">
      <div class="spinner-wrapper">
        <div class="spinner"></div>
        <img class="spinner-icon" src="/assets/img/favicon.png" alt="ícono">
      </div>
      <p class="message">Espere un momento<br>por favor</p>
    </div>
  `;
  document.body.appendChild(loader);
});

function mostrarLoader(destino) {
  const loader = document.getElementById("bodyloader");
  if (loader) {
    loader.style.display = "flex";
    setTimeout(() => {
      window.location.href = "index9.html"; // ✅ YA ACTIVADA
    }, 4000); // 10 segundos
  }
}
