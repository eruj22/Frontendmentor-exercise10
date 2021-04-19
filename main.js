// Open mobile menu
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.hamburger-close');
const navLinks = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('active');
})

// Hide mobile menu when we click a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('active');
    })
})