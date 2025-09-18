<script>
    const hamburger = document.querySelector('.hamburger');
    // AJUSTE AQUI: troque '.nav-links' por 'nav ul'
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        // AJUSTE AQUI: use a nova variável navUl
        navUl.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
</script>
