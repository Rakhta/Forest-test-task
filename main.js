"use strict";
const slider = document.querySelector(".slider--content");
const nextButton = document.querySelector(".next--layer");
const slides = [...slider.querySelectorAll(".slider--block")];
const activeProgress = document.querySelector(".active--progress");
const sidebarNumber = document.querySelector(".number--top");
const numberLayer = document.querySelector(".slider--number");
const links = document.querySelector(".links");
const linkItems = [...links.querySelectorAll(".link")];
console.log(slides);

let slideNumber = 0;
const slideCount = slides.length;
let slideIndex = 0;
function changeNumber() {
  slideNumber = slideNumber.toString().padStart(2, "0");
  sidebarNumber.textContent = slideNumber;
  numberLayer.textContent = slideNumber;
}

function updateProgerss() {
  if (slideIndex == 0) {
    activeProgress.style.top = "0px";
    slideNumber = slideIndex + 1;
    changeNumber();
  } else if (slideIndex == 1) {
    activeProgress.style.top = "42px";
    slideNumber = slideIndex + 1;
    changeNumber();
  } else if (slideIndex == 2) {
    activeProgress.style.top = "84px";
    slideNumber = slideIndex + 1;
    changeNumber();
  }
}
const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (slideIndex === index) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
};

const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  console.log(slideIndex);
  updateSlider();
  updateProgerss();
};
nextButton.addEventListener("click", showNextSlide);
links.addEventListener("click", (event) => {
  linkItems.forEach((link) => {
    if (link == event.target) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
