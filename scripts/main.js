document.addEventListener('DOMContentLoaded', function() {
    // ===== PARTICLES.JS BACKGROUND =====
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6e3bff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#6e3bff", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // ===== TILT.JS FOR INTERACTIVE CARDS =====
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".interactive-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            mobileMenuBtn.textContent = isOpen ? '☰' : '✕';
        });
    }

    // ===== CURSOR TRAIL EFFECT =====
    const cursorTrail = document.querySelector('.cursor-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    const speed = 0.2;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const dx = mouseX - trailX;
        const dy = mouseY - trailY;
        trailX += dx * speed;
        trailY += dy * speed;
        
        cursorTrail.style.left = `${trailX}px`;
        cursorTrail.style.top = `${trailY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-section, .interactive-card, .video-container').forEach(section => {
        observer.observe(section);
    });

    // ===== LOGO HOVER EFFECT =====
    document.querySelectorAll('.guild-logo').forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1)';
            logo.style.filter = 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1)';
            logo.style.filter = 'drop-shadow(0 0 5px var(--accent))';
        });
    });
});
