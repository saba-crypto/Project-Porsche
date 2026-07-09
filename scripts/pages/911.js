import "../shared/sidebar.js";

//car parts slider
const carPartSliderNavigationButtons =
  document.querySelectorAll(".model-part-link");
const carPartSliderNavigationArrows = document.querySelectorAll(
  ".car-part-arrow-btn",
);
const carPartsSliderNavigationLinks = document.querySelectorAll(
  ".car-part-navigation-link",
);
const carPartSlides = document.querySelectorAll(".car-part-slide");

let currentSlide = carPartSlides[0];
let currentSlideIndex = Number(currentSlide.dataset.index);

const modelPartsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let i = Number(entry.target.dataset.index);
      if (entry.isIntersecting) {
        currentSlide = entry.target;
        currentSlideIndex = i;

        carPartsSliderNavigationLinks[i].classList.add("selected");
        manageSliderNavigationButtons(entry, carPartSliderNavigationButtons);
        manageNavigationArrows(
          entry,
          i,
          carPartSliderNavigationArrows,
          carPartSlides,
        );
      } else {
        carPartsSliderNavigationLinks[i].classList.remove("selected");
      }
    });
  },
  { threshold: 0.8 },
);

carPartSlides.forEach((slide, i) => {
  slide.dataset.index = i;
  modelPartsObserver.observe(slide);
});

//highlights slider

let currentHighlightSlide;
let currentHighlightSlideIndex;
const carHighlightsSlides = document.querySelectorAll(".highlights-slide");
const carHighlightsArrows = document.querySelectorAll(".highlights-arrow-btn");
const carHighlightsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      currentHighlightSlide = entry.target;
      let i = Number(entry.target.dataset.index);
      currentHighlightSlideIndex = i;
      manageNavigationArrows(
        entry,
        i,
        carHighlightsArrows,
        carHighlightsSlides,
      );
    });
  },
  { threshold: 0.8 },
);
carHighlightsSlides.forEach((slide, i) => {
  slide.dataset.index = i;
  carHighlightsObserver.observe(slide);
});

function manageSliderNavigationButtons(entry, buttons) {
  if (entry.target.id === "slide3") {
    buttons[0].classList.remove("selected");
    buttons[1].classList.add("selected");
  } else if (entry.target.id === "slide1") {
    buttons[1].classList.remove("selected");
    buttons[0].classList.add("selected");
  }
}

function manageNavigationArrows(entry, i, arrows, slides) {
  if (i === 0) {
    arrows[0].classList.add("disabled");
    arrows[1].classList.remove("disabled");
  } else if (i === slides.length - 1) {
    arrows[0].classList.remove("disabled");
    arrows[1].classList.add("disabled");
  } else {
    arrows[0].classList.remove("disabled");
    arrows[1].classList.remove("disabled");
  }
}

carPartSliderNavigationArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    if (event.target.classList.contains("arrow-btn-left")) {
      carPartSlides[currentSlideIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else if (event.target.classList.contains("arrow-btn-right")) {
      carPartSlides[currentSlideIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });
});

carHighlightsArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (event.target.classList.contains("arrow-btn-left")) {
      carHighlightsSlides[currentHighlightSlideIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else if (event.target.classList.contains("arrow-btn-right")) {
      carHighlightsSlides[currentHighlightSlideIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });
});

//section7

const videoPlaybackButton = document.querySelector(".video-playback-btn");
const modelVideo = document.querySelector(".model-video");
videoPlaybackButton.addEventListener("click", (event) => {
  toggleVideo(modelVideo, videoPlaybackButton);
});
function toggleVideo(video, button) {
  if (video.paused) {
    video.play();
    button.classList.remove("video-paused");
  } else {
    video.pause();
    button.classList.add("video-paused");
  }
}

//header
const fixedWhiteHeader = document.querySelector(".white-header-fixed");

const section3 = document.getElementById("section3");
const section3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedWhiteHeader.classList.add("show");
      }
    });
  },
  { threshold: 0.4 },
);

section3Observer.observe(section3);

const section2 = document.getElementById("section2");
const section2Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedWhiteHeader.classList.remove("show");
      }
    });
  },
  { threshold: 0.7 },
);

section2Observer.observe(section2);
