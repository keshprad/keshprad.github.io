const nav = document.querySelector("nav");
const home = document.querySelector("#home");
const navLinks = document.querySelector("ul.nav-links");
const faders = document.querySelectorAll(".fade-in");


const homeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("scrolled");
            navLinks.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
            navLinks.classList.remove("scrolled");
        }
    })
}, {
    rootMargin: "-100px 0px 0px 0px"
});

homeObserver.observe(home);