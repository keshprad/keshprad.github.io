//
// Mobile Nav
//
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-active");

    // Links animate one after another
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
  });
};

//
// toTop
//
window.addEventListener("scroll", function toTop() {
  const home_arrow = document.querySelector("div.go-home");

  if (window.scrollY < 300) {
    home_arrow.classList.remove("active");
  } else {
    home_arrow.classList.add("active");
  }
});

//
// Typewriter
//
class TypeWriter {
  constructor(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
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
    if (this.isDeleting) {
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
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
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
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txt = document.querySelector(".typewriter");
  const words = JSON.parse(txt.getAttribute("data-words"));
  const wait = txt.getAttribute("data-wait");
  new TypeWriter(txt, words, wait);
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//
// temporary no scroll
//
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

window.onload = async () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  await sleep(750);
  disableScroll();
  await sleep(5000);
  enableScroll();
};

//
// hero scroll background
//
martian_hero = document.querySelector(".martian-hero");
window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;

  // martian-hero
  martian_hero.style.bottom = -scroll * 0.3 + "px";
});

function goTo(ele_query, xBool, yBool) {
  ele = $(ele_query);
  ele_pos = ele.position();

  if (xBool && yBool) {
    window.scrollTo({
      top: ele_pos.top,
      left: ele_pos.left,
      behavior: "smooth",
    });
  } else if (xBool) {
    window.scrollTo({
      top: 0,
      left: ele_pos.left,
      behavior: "smooth",
    });
  } else if (yBool) {
    window.scrollTo({
      top: ele_pos.top,
      left: 0,
      behavior: "smooth",
    });
  }
}

//
// App
//
const app = () => {
  navSlide();
};
app();
