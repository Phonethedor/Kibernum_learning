/* Mobile Menu Toggle */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');

        // Change icon based on state
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('show-menu')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

/* Close menu when clicking a link */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

/* Change Header Background on Scroll */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
        header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    } else {
        header.classList.remove('scroll-header');
        header.style.boxShadow = "none";
    }
});

/* Scroll Reveal Animation (Simple version without external library) */
const revealElements = document.querySelectorAll('.feature-item, .product-card, .about-data, .about-img');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

/* Initial styles for reveal elements */
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();
