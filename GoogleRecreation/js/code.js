const opnBtn = document.getElementById("sdm_open");
const toggler = document.getElementById("toggle_holder");
const sideMenu = document.getElementById("sdm_holder");
const sideLinks = document.getElementById("sdm_links");
const overlayed = document.getElementById("ovl");
const application = document.getElementById("ap_lk");


//*************OPENING AND CLOSING OF SIDE MENU */
function openSide() {
    sideMenu.style.height = "100vh";
    sideMenu.style.width = "75%";
    sideLinks.style.display = "flex";
    application.style.display = "flex";
    toggler.style.display = "none";
    overlayed.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == sideMenu) {
    sideMenu.style.height = "50px";
    sideMenu.style.width = "60%";
    sideLinks.style.display = "none";
    application.style.display = "none";
    toggler.style.display = "inline-block";
    overlayed.style.display = "none";
  }
}

//*********************OPENING AND CLOSING OF DROP-DOWN MENU */

let dd = document.getElementById("myDropdown");
let outside = document.getElementById("out");

function runDropdown() {
  dd.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == dd) {
    dd.style.display = "none";
  }
}


//PICTURE SLIDE SHOW JS
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//TEXT-SLIDER
const list = document.querySelectorAll("li");
for (let i = 0; i < 5; i++) {
    list[i].classList.add("active");
}