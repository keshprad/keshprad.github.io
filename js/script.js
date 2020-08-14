const navSlide = () => {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav-active');

        // Links animate one after another
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`
            }
        });
    });
}

const app = () => {
    navSlide();
}

app();