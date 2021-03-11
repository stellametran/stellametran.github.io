const menu = document.querySelector(".navbar");
const toggle = document.querySelector(".toggle");
const slides = document.querySelectorAll(".hero-image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
var currentSlide = 0;

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.innerHTML = "<i class='fas fa-times'></i>";
  }
}

function nextSlide() {
  slides[currentSlide].classList.remove("visible");
  currentSlide++;
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("visible");
}

function prevSlide() {
  slides[currentSlide].classList.remove("visible");
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add("visible");
}

var slideInterval = setInterval(nextSlide, 5000);

function clearInt() {
  clearInterval(slideInterval);
}

toggle.addEventListener("click", toggleMenu);
left.addEventListener("click", prevSlide);
left.addEventListener("click", clearInt);
right.addEventListener("click", nextSlide);
right.addEventListener("click", clearInt);