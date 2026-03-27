document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').classList.remove('fa-xmark');
                mobileMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    const contactForm = document.getElementById('contactForm');
    const btnSubmit = contactForm.querySelector('button[type="submit"]');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const originalText = btnSubmit.innerText;
        btnSubmit.innerText = 'Enviando...';
        btnSubmit.style.opacity = '0.7';
        btnSubmit.disabled = true;

        setTimeout(() => {
            alert('¡Gracias por contactar con Jardines VerdeVivo! Hemos recibido su solicitud y le responderemos pronto.');
            contactForm.reset();
            btnSubmit.innerText = originalText;
            btnSubmit.style.opacity = '1';
            btnSubmit.disabled = false;
        }, 1500); 
    });
});
