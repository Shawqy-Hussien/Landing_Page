const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.classList.add('deActive');
    } else if (navLinks.classList.contains('deActive')) {
        navLinks.classList.remove('deActive');
        navLinks.classList.add('active');
    } else {
        navLinks.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        navLinks.classList.add('deActive');
    }
});