document.addEventListener("DOMContentLoaded", () => {
    // Navbar behavior on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(7, 9, 15, 0.95)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(7, 9, 15, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });

    // Button smooth scroll
    const botonInfo = document.getElementById('btn-info');
    if (botonInfo) {
        botonInfo.addEventListener('click', () => {
            document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submit interaction
    const formulario = document.getElementById('contactForm');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = formulario.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = '¡Procesando Reserva...!';
            
            // Simulating API loading request
            setTimeout(() => {
                alert('¡Reserva enviada correctamente! Nos pondremos en contacto pronto. 🎱🍻');
                formulario.reset();
                btn.innerText = originalText;
            }, 1200);
        });
    }
});