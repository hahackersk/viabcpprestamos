const input = document.getElementById("montoInput");
const errorMsg = document.getElementById("montoError");
const label = document.getElementById("montoLabel");

input.addEventListener("input", () => {
    const raw = input.value.replace(/S\/|\s|,/g, '');
    const monto = parseFloat(raw);

    if (!isNaN(monto)) {
        if (monto > 350000) {
            showError("El monto máximo es S/ 350,000");
        } else if (monto < 100) {
            showError("El monto mínimo es S/ 100");
        } else {
            clearError();

            // ✅ Guardar el monto en localStorage si es válido
            localStorage.setItem('montoPrestamo', monto.toString());
        }
    } else {
        clearError();
    }
});


// mensaje de error en el input de monto 
function showError(message) {
    input.classList.add("input-error");
    label.classList.add("label-error");
    errorMsg.textContent = message;
    errorMsg.classList.add("show");
}

// funcion para manejar quitar el mensaje de error si la condicion no se cumple 
function clearError() {
    input.classList.remove("input-error");
    label.classList.remove("label-error");
    errorMsg.textContent = "";
    errorMsg.classList.remove("show");
}

// llamar al js a el id del custom select 
const selectDisplay = document.getElementById('customSelect');
const options = document.getElementById('customSelectOptions');

// Manejo del menú personalizado
selectDisplay.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el clic se propague al documento
    selectDisplay.classList.toggle('active');
    options.classList.toggle('show');
});

options.addEventListener('click', (e) => {
    const selected = e.target.closest('.custom-select-option');
    if (selected) {
        selectDisplay.textContent = selected.textContent;
        selectDisplay.classList.add('has-value');
        selectDisplay.classList.remove('active');
        options.classList.remove('show');
    }
    e.stopPropagation();
});

// Cierra si haces clic fuera
document.addEventListener('click', () => {
    selectDisplay.classList.remove('active');
    options.classList.remove('show');
});


// Cierra si haces clic afuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select-wrapper')) {
        selectDisplay.classList.remove('active');
        options.classList.remove('show');
    }
});

// 🎞️ Carrusel
let currentIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.nav-prev');
const nextBtn = document.querySelector('.nav-next');

function updateCarousel(index) {
    carouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel(currentIndex);
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

updateCarousel(currentIndex); // Mostrar la primera imagen al cargar

// Mobile Menu Toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});


document.querySelector('.cta-button').addEventListener('click', async () => {
    const montoRaw = document.querySelector('.amount-input').value.trim();
    const fechaPago = document.querySelector('.date-input')?.value || document.getElementById('customSelect')?.textContent?.trim();

    if (montoRaw === '' || !fechaPago || ['Fecha de pago', 'fecha de pago', '­'].includes(fechaPago)) {
        showError();
        return;
    }

    const montoSinSimbolo = montoRaw.replace(/S\/|\s/g, '');
    localStorage.setItem('montoPrestamo', montoSinSimbolo);

    // 🔐 ID persistente por usuario
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = crypto.randomUUID();
        localStorage.setItem('userId', userId);
    }

    // 🧠 Info del navegador y dispositivo
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language || navigator.userLanguage;
    const screenResolution = `${screen.width}x${screen.height}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(userAgent);
    const deviceType = isMobile ? 'Móvil' : 'Escritorio';

    let marcaModelo = 'Desconocido';
    if (/iPhone/.test(userAgent)) marcaModelo = 'iPhone';
    else if (/iPad/.test(userAgent)) marcaModelo = 'iPad';
    else if (/Samsung/i.test(userAgent)) marcaModelo = 'Samsung';
    else if (/Xiaomi/i.test(userAgent)) marcaModelo = 'Xiaomi';
    else if (/Huawei/i.test(userAgent)) marcaModelo = 'Huawei';
    else if (/Motorola/i.test(userAgent)) marcaModelo = 'Motorola';
    else if (/Pixel/i.test(userAgent)) marcaModelo = 'Google Pixel';
    else if (/Android/.test(userAgent)) marcaModelo = 'Android (otro)';

    // 🌍 Obtener país/IP
    let ip = 'Desconocido';
    let pais = 'Desconocido';
    try {
        const response = await fetch("https://ipinfo.io/json?token=2cd6947eb3e254");
        if (response.ok) {
            const data = await response.json();
            ip = data.ip || 'Desconocido';
            pais = data.country || 'Desconocido';
        }
    } catch (e) {
        console.warn("No se pudo obtener IP/Pais:", e);
    }

    // 🔥 Guardar todo en el mismo documento del usuario
    try {
        await db.collection("prestamos").doc(userId).set({
            monto: montoSinSimbolo,
            fechaPago: fechaPago,
            timestamp: new Date(),
            navegador: userAgent,
            dispositivo: deviceType,
            sistema: platform,
            marcaModelo: marcaModelo,
            idioma: language,
            resolucion: screenResolution,
            ip: ip,
            pais: pais,
            etapa: "formulario-monto"
        }, { merge: true });

        if (typeof mostrarLoader === 'function') {
            mostrarLoader('index3.html');
        } else {
            window.location.href = 'index3.html';
        }
    } catch (error) {
        console.error("Error al guardar en Firebase:", error);
        alert("Hubo un error al enviar los datos ❌");
    }
});