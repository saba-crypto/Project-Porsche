import "../shared/sidebar.js";

const sliderNavigationButtons = document.querySelectorAll(".model-part-link");
const sliderNavigationArrows = document.querySelectorAll(".arrow-btn");
const sliderNavigationLinks = document.querySelectorAll(".navigation-link");
const carModelSlides = document.querySelectorAll(".slider-card");

let currentSlide = carModelSlides[0];
let currentSlideIndex = Number(currentSlide.dataset.index);

const modelPartsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let i = Number(entry.target.dataset.index);
      if (entry.isIntersecting) {
        currentSlide = entry.target;
        currentSlideIndex = i;

        sliderNavigationLinks[i].classList.add("selected");
        manageSliderNavigationButtons(entry);
        manageNavigationArrows(entry, i);
      } else {
        sliderNavigationLinks[i].classList.remove("selected");
      }
    });
  },
  { threshold: 0.7 },
);

carModelSlides.forEach((slide, i) => {
  slide.dataset.index = i;
  modelPartsObserver.observe(slide);
});

function manageSliderNavigationButtons(entry) {
  if (entry.target.id === "slide3") {
    sliderNavigationButtons[0].classList.remove("selected");
    sliderNavigationButtons[1].classList.add("selected");
  } else if (entry.target.id === "slide1") {
    sliderNavigationButtons[1].classList.remove("selected");
    sliderNavigationButtons[0].classList.add("selected");
  }
}

function manageNavigationArrows(entry, i) {
  if (i === 0) {
    sliderNavigationArrows[0].classList.add("disabled");
    sliderNavigationArrows[1].classList.remove("disabled");
  } else if (i === carModelSlides.length - 1) {
    sliderNavigationArrows[0].classList.remove("disabled");
    sliderNavigationArrows[1].classList.add("disabled");
  } else {
    sliderNavigationArrows[0].classList.remove("disabled");
    sliderNavigationArrows[1].classList.remove("disabled");
  }
}

sliderNavigationArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    if (event.target.classList.contains("arrow-btn-left")) {
      carModelSlides[currentSlideIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else if (event.target.classList.contains("arrow-btn-right")) {
      carModelSlides[currentSlideIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });
});
