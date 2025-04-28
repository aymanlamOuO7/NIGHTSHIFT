// Simple mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Logo hover effect
document.querySelector('.guild-logo').addEventListener('mouseenter', function() {
    this.style.filter = 'drop-shadow(0 0 15px var(--accent))';
});
document.querySelector('.guild-logo').addEventListener('mouseleave', function() {
    this.style.filter = 'drop-shadow(0 0 5px var(--accent))';
});
