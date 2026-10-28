// Selecting Document Elements for Nav-Menu Toggle Mechanics
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Click Activation Toggle Logic Handler function 
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Auto-close dropdown drawer menu overlay cleanly when users select individual targeted items
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
