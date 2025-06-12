// Countdown Timer
const eventDate = new Date('July 12, 2025 09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Aplicar animaciones al cambiar valores
    updateTimerElement('days', days);
    updateTimerElement('hours', hours);
    updateTimerElement('minutes', minutes);
    updateTimerElement('seconds', seconds);

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = '<span class="finished">¡El evento ha comenzado!</span>';
    }
}

// Función para actualizar valores con animación
function updateTimerElement(id, value) {
    const element = document.getElementById(id);
    if (element.textContent != value) {
        element.classList.add("update");
        setTimeout(() => {
            element.textContent = value;
            element.classList.remove("update");
        }, 200);
    }
}

// Activar actualización cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);


// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});