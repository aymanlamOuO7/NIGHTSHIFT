// scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Logo animation
    const logos = document.querySelectorAll('.guild-logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.filter = 'drop-shadow(0 0 15px var(--accent))';
            logo.style.transform = 'scale(1.1) rotate(15deg)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.filter = 'drop-shadow(0 0 5px var(--accent))';
            logo.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Video hover effect
    const video = document.querySelector('.video-container');
    if (video) {
        video.addEventListener('mouseenter', () => {
            video.style.boxShadow = '0 0 50px var(--accent-glow)';
        });
        video.addEventListener('mouseleave', () => {
            video.style.boxShadow = '0 0 30px var(--accent-glow)';
        });
    }

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            menuBtn.textContent = navLinks.style.display === 'flex' ? '✕' : '☰';
        });
    }
});
