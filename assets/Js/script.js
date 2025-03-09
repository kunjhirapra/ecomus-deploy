// let slides = document.getElementsByClassName("slide");
// let dotLinks = document.getElementsByClassName("dot");
// let length = slides.length;
// let currentSlide = 0;

// function chageSlide(moveTo) {
//   if (moveTo < 0) {
//     moveTo = slides.length - 1;
//   } else if (moveTo >= slides.length) {
//     moveTo = 0;
//   }
//   slides[currentSlide].classList.remove("active");
//   dotLinks[currentSlide].classList.remove("active-dot");
//   currentSlide = moveTo;
//   slides[currentSlide].classList.add("active");
//   dotLinks[currentSlide].classList.add("active-dot");
// }

// document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
//   bullet.addEventListener("click", () => {
//     if (currentSlide !== bulletIndex) {
//       chageSlide(bulletIndex);
//     }
//   });
// });

// //  Auto Slider

// const nextSlide = () => {
//   chageSlide(currentSlide + 1);
// };

// const prevSlide = () => {
//   chageSlide(currentSlide - 1);
// };

// const getFirstSlide = () => {
//   chageSlide(0);
// };

// const getLastSlide = () => {
//   chageSlide(slides.length - 1);
// };

// let slideInterval;

// const startSlideShow = () => {
//   slideInterval = setInterval(() => {
//     currentSlide < length - 1 ? nextSlide() : getFirstSlide();
//   }, 2000);
// };

// startSlideShow();

// Hiding the navigation bar on scroll down and showing it on scroll up

const navBar = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

  if (lastScrollY < window.scrollY) {
    navBar.classList.remove("show");
    navBar.classList.add("hide");
  } else {
    navBar.classList.remove("hide");
    navBar.classList.add("show");
  }

  lastScrollY = currentScrollY;
});

let index = 1;
const images = document.querySelector(".carousel-images");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
const totalImages = slides.length;

images.style.transform = `translateX(-${index * 100}%)`;

function update() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index - 1);
  });

  slides.forEach((slide, i) => {
    if (i !== index) {
      slide
        .querySelector(".carousel-text")
        .classList.remove("carousel-text-down");
      slide.querySelector(".carousel-text").classList.add("carousel-text-up");
    } else {
      slide
        .querySelector(".carousel-text")
        .classList.remove("carousel-text-up");
      slide
        .querySelector(".carousel-text")
        .classList.remove("carousel-text-up");
    }
    slide
      .querySelector(".carousel-text")
      .classList.toggle("active-text", i === index || i !== index);
  });
}

function moveSlide(step) {
  index += step;
  images.style.transition = "transform 0.5s ease-in-out";
  images.style.transform = `translateX(-${index * 100}%)`;
}

function goToSlide(slideIndex) {
  index = slideIndex;
  images.style.transition = "transform 0.5s ease-in-out";
  images.style.transform = `translateX(-${index * 100}%)`;
  update();
}

images.addEventListener("transitionend", () => {
  if (index >= totalImages - 1) {
    images.style.transition = "none";
    index = 1;
    images.style.transform = `translateX(-${index * 100}%)`;
  } else if (index <= 0) {
    images.style.transition = "none";
    index = totalImages - 2;
    images.style.transform = `translateX(-${index * 100}%)`;
  }
  update();
});

function autoSlide() {
  moveSlide(1);
}

let slideInterval = setInterval(autoSlide, 3000);

let years = document.querySelector(".year");
let currentYear = new Date().getFullYear();
years.textContent = currentYear;

//  adding loadmore-btn functionality

const loadMoreBtn = document.querySelector("#loadmore-btn");

let currentItem = 6;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".item-container")];
  for (let i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
  currentItem += 6;
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

//  benefits slider

// const card = document.querySelector(".benefits-card");
// const cardIndex = 1;

// function dotUpdate() {
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("active", i === cardIndex - 1);
//   });
// }

// function goToSlide(slideIndex) {
//   cardIndex = slideIndex;
//   card.style.transition = "transform 0.5s ease-in-out";
//   card.style.transform = `translateX(-${index * 100}%)`;
//   slideUpdate();
// }
