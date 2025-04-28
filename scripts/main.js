document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particle.js
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
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Custom Cursor Trail
    const cursor = document.querySelector('.cursor-trail');
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
        
        cursor.style.left = `${trailX}px`;
        cursor.style.top = `${trailY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Mobile Menu Toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        const nav = document.querySelector('.nav-links');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Logo Hover Effect
    document.querySelector('.guild-logo').addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(15deg) scale(1.1)';
        this.style.filter = 'drop-shadow(0 0 15px var(--accent))';
    });
    document.querySelector('.guild-logo').addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0) scale(1)';
        this.style.filter = 'drop-shadow(0 0 5px var(--accent))';
    });
});
