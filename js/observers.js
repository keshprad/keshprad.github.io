const nav = document.querySelector("nav");
const home = document.querySelector("#home");
const sections = [document.querySelector("#about"), document.querySelector("#projects"), document.querySelector("#work"),
    document.querySelector("#teams"), document.querySelector("#education")];
const sectionLinks = [document.querySelector(".about-link"), document.querySelector(".projects-link"), 
    document.querySelector(".work-link"), document.querySelector(".teams-link"), document.querySelector(".education-link")];
let sectionLink = '';


const homeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("scrolled")
        } else {
            nav.classList.remove("scrolled")
        }
    })
}, {
    rootMargin: "-100px 0px 0px 0px"
});

homeObserver.observe(home);