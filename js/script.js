// 
// Mobile Nav
// 
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

// 
// Typewriter
// 
class TypeWriter {  
    constructor(txtElement, words, wait) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
  
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
    
        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        // Insert txt into element
        this.txtElement.innerHTML = `${this.txt}`;
    
        // Initial Type Speed
        let typeSpeed = 100;
    
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
    
        setTimeout(() => this.type(), typeSpeed);
    }
}
  
  
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txt = document.querySelector('.typewriter');
    const words = JSON.parse(txt.getAttribute('data-words'));
    const wait = txt.getAttribute('data-wait');
    new TypeWriter(txt, words, wait);
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// 
// Logo Animation Delay
// 
const delayAnimate = async() => {
    const delayedObjects = [document.querySelector(".logo")];
    
    while (true) {
        await sleep(5000);
        delayedObjects.forEach((object) => {
            object.classList.add("animate__animated", "animate__headShake");
        });
        await sleep(1000);
        delayedObjects.forEach((object) => {
            object.classList.remove("animate__animated", "animate__headShake");
        });
        
    }
}


// 
// Vertical Tabs
// 
function _class(name){
    return document.getElementsByClassName(name);
} 
const switchTabs = () => {
    let tabPanes = _class("tab-header")[0].getElementsByTagName("div");  
    for(let i=0;i<tabPanes.length;i++){
        tabPanes[i].addEventListener("click",function(){
            _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
            tabPanes[i].classList.add("active");
            
            _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
            _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
        });
    }
}



// 
// App
// 

const app = () => {
    navSlide();
    delayAnimate();
    switchTabs();
}
app();