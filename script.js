document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú móvil (Hamburguesa)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Navegación suave (Smooth Scrolling)
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Cerrar menú en móvil al hacer clic
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // Scroll suave compensando el alto del header fijo (70px aprox)
            window.scrollTo({
                top: targetSection.offsetTop - 70, 
                behavior: 'smooth'
            });
        });
    });

    // 3. Manejo del Formulario (Simulación)
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recargar la página
        const nombre = document.getElementById('nombre').value;
        
        // Aquí iría tu lógica real de envío (fetch/axios) a un backend
        alert(`¡Gracias por contactar con VerdeVivo, ${nombre}! Hemos recibido tu mensaje y te responderemos pronto.`);
        contactForm.reset();
    });
});
