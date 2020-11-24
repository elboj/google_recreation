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


//CODE FOR THE CAROUSEL
const leftUl = document.querySelector("#carousel__holder");
const btn = document.querySelector("#bt1");
const btn2 = document.querySelector("#bt2");


//#####################MOVING LEFT################################
function moveLeft() {
  const leftPX = window.getComputedStyle(leftUl).left;
  console.log(leftPX);
  if (leftPX === "50px") {
      leftUl.style.left = "-300px";
      leftUl.classList.add("transit");
  }
}

function moveLeft2() {
  const newLeftPX = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX);
  if (newLeftPX === "-300px") {
      leftUl.style.left = "-600px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

function moveLeft3() {
  const newLeftPX2 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX2);
  if (newLeftPX2 === "-600px") {
      leftUl.style.left = "-1200px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

function moveLeft4() {
  const newLeftPX3 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX3);
  if (newLeftPX3 === "-1200px") {
      leftUl.style.left = "-1500px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

btn.addEventListener("click", moveLeft);
btn.addEventListener("click", moveLeft2);
btn.addEventListener("click", moveLeft3);
btn.addEventListener("click", moveLeft4);

//###############MOVING TO THE RIGHT


function moveRight1() {
  const newLeftPX4 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX4);
  if (newLeftPX4 === "-1500px") {
      leftUl.style.left = "-1200px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

function moveRight2() {
  const newLeftPX5 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX5);
  if (newLeftPX5 === "-1200px") {
      leftUl.style.left = "-600px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

function moveRight3() {
  const newLeftPX6 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX6);
  if (newLeftPX6 === "-600px") {
      leftUl.style.left = "-300px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

function moveRight4() {
  const newLeftPX7 = window.getComputedStyle(leftUl).left;
  console.log(newLeftPX7);
  if (newLeftPX7 === "-300px") {
      leftUl.style.left = "50px";
      leftUl.classList.add("transit");
      //btn.style.visibility = "hidden";
  }
}

btn2.addEventListener("click", moveRight1);
btn2.addEventListener("click", moveRight2);
btn2.addEventListener("click", moveRight3);
btn2.addEventListener("click", moveRight4);