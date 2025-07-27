






// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ✅ Header SIEMPRE visible
const header = document.querySelector('.header');
header.style.transform = 'translateY(0)';
header.style.transition = 'transform 0.3s ease-in-out';

// Form validation and interactions
const amountInput = document.querySelector('.amount-input');
const dateSelect = document.querySelector('.date-input');
const ctaButton = document.querySelector('.cta-button');

// Format amount input
amountInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value) {
        value = parseInt(value).toLocaleString('es-PE');
        e.target.value = 'S/ ' + value;
    }
});

// CTA Button click handler (sin envío a Telegram)
// ctaButton.addEventListener('click', (e) => {
//     e.preventDefault();

//     const amount = amountInput.value.trim();
//     const date = dateSelect.value;

//     if (!amount || amount === '¿Cuánto necesitas? (S/)') {
//         alert('Por favor, ingresa el monto que necesitas');
//         amountInput.focus();
//         return;
//     }

//     if (!date || date === 'Fecha de pago') {
//         alert('Por favor, selecciona la fecha de pago');
//         dateSelect.focus();
//         return;
//     }

// });

// // Process navigation
// const navPrev = document.querySelector('.nav-prev');
// const navNext = document.querySelector('.nav-next');
// const dots = document.querySelectorAll('.dot');

// let currentStep = 0;
// const totalSteps = 6;

// navNext.addEventListener('click', () => {
//     if (currentStep < totalSteps - 1) {
//         currentStep++;
//         updateProgress();
//     }
// });

// navPrev.addEventListener('click', () => {
//     if (currentStep > 0) {
//         currentStep--;
//         updateProgress();
//     }
// });

// function updateProgress() {
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index <= currentStep);
//     });

//     const stepNumber = document.querySelector('.step-number');
//     stepNumber.textContent = `${currentStep + 1} de ${totalSteps}`;
// }

// // Animate elements on scroll
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.benefit-item, .faq-item, .step-form').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(el);
// });

// // Add loading animation to buttons
// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         if (!this.classList.contains('loading')) {
//             this.classList.add('loading');
//             setTimeout(() => {
//                 this.classList.remove('loading');
//             }, 1000);
//         }
//     });
// });

// // Initialize tooltips for form fields
// const formInputs = document.querySelectorAll('input, select');
// formInputs.forEach(input => {
//     input.addEventListener('focus', function () {
//         this.classList.add('focused');
//     });

//     input.addEventListener('blur', function () {
//         this.classList.remove('focused');
//     });
// });

// // Add ripple effect to buttons
// function createRipple(event) {
//     const button = event.currentTarget;
//     const circle = document.createElement('span');
//     const diameter = Math.max(button.clientWidth, button.clientHeight);
//     const radius = diameter / 2;

//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
//     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
//     circle.classList.add('ripple');

//     const ripple = button.getElementsByClassName('ripple')[0];
//     if (ripple) {
//         ripple.remove();
//     }

//     button.appendChild(circle);
// }

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', createRipple);
// });

// // Add CSS for ripple effect
// const style = document.createElement('style');
// style.textContent = `
//     button {
//         position: relative;
//         overflow: hidden;
//     }

//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background-color: rgba(255, 255, 255, 0.3);
//         transform: scale(0);
//         animation: ripple-animation 0.6s linear;
//         pointer-events: none;
//     }

//     @keyframes ripple-animation {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }

//     .focused {
//         border-color: #1e4091 !important;
//         box-shadow: 0 0 0 3px rgba(30, 64, 145, 0.1);
//     }

//     .loading {
//         opacity: 0.7;
//         pointer-events: none;
//     }
// `;
// document.head.appendChild(style);


