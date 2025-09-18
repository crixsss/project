const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('open');
    hamburger.classList.toggle('active');
});
