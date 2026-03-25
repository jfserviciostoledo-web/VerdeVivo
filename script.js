document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar dinámico (Cambia de transparente a sólido al hacer scroll)
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Menú Móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar icono de hamburguesa a "X"
        const icon = mobileMenu.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // 3. Animaciones de Scroll (Fade Up profesional)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // El elemento aparece cuando el 15% es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Lógica de Envío del Formulario
    const contactForm = document.getElementById('contactForm');
    const btnSubmit = contactForm.querySelector('button[type="submit"]');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular efecto de carga en el botón
        const originalText = btnSubmit.innerText;
        btnSubmit.innerText = 'Enviando...';
        btnSubmit.style.opacity = '0.7';
        btnSubmit.disabled = true;

        setTimeout(() => {
            alert('Su solicitud ha sido recibida con éxito. Nuestro equipo se pondrá en contacto con usted a la mayor brevedad.');
            contactForm.reset();
            
            // Restaurar botón
            btnSubmit.innerText = originalText;
            btnSubmit.style.opacity = '1';
            btnSubmit.disabled = false;
        }, 1500); // Simula 1.5 segundos de retraso de red
    });
});
