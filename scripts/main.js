document.addEventListener('DOMContentLoaded', () => {
    // Cursor trail effect
    const cursorTrail = document.querySelector('.cursor-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    const speed = 0.2;
    const trailCount = 5;
    const trails = [];
    
    // Create multiple trail elements
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.width = `${20 - i * 3}px`;
        trail.style.height = `${20 - i * 3}px`;
        trail.style.opacity = 1 - (i * 0.2);
        document.body.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animate = () => {
        // Lead trail (first element)
        let prevX = mouseX;
        let prevY = mouseY;
        
        trails.forEach((trail, index) => {
            const dx = prevX - trail.x;
            const dy = prevY - trail.y;
            trail.x += dx * speed;
            trail.y += dy * speed;
            
            trail.element.style.left = `${trail.x}px`;
            trail.element.style.top = `${trail.y}px`;
            
            prevX = trail.x;
            prevY = trail.y;
        });
        
        requestAnimationFrame(animate);
    };
    
    animate();
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section, .principle').forEach(section => {
        observer.observe(section);
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Add glow effect to logo on hover
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.filter = 'drop-shadow(0 0 10px var(--accent)) brightness(1.2)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.filter = 'drop-shadow(0 0 5px var(--accent))';
        });
    }
});