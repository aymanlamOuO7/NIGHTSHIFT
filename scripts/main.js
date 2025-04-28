document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Logo hover effect
    const logos = document.querySelectorAll('.guild-logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.filter = 'drop-shadow(0 0 15px var(--accent))';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.filter = 'drop-shadow(0 0 5px var(--accent))';
        });
    });
});
