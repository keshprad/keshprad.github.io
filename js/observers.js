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


// const appearOptions = {
//     threshold: 1, rootMargin: "0px 0px -100px 0px"
// };
// const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
//     entries.forEach (entry => {
//         if (!entry.isIntersecting){
//             return;
//         } else {
//             if (entry.target.classList.contains("from-right")) {
//                 entry.target.classList.add("animate__animated animate__fadeInRight");
//             } else if (entry.target.classList.contains("from-left")) {
//                 entry.target.classList.add("animate__animated animate__fadeInLeft");
//             }
//             appearOnScroll.unobserve(entry.target);
//         }
//     })
// }, appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// });