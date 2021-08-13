// hamburger menu effect 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// close hamburger menu after clicking
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// terminal effect on the hero text 
var typed = new Typed("#typed", {
  strings: [
    "Ashutosh Dash",
    "a Design enthusiast.",
    "a Web Developer.",
  ],
  
  smartBackspace: true, // Default value
  typeSpeed: 50, 
  backSpeed: 55, 
  loop: true,
  loopCount: Infinity,
  startDelay: 0,
  showCursor: false,
});



         