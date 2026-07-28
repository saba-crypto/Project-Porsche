import "../shared/sidebar.js";

const panameraImage = document.querySelector(".model-side-profile-image");
const panameraSignatureImage = document.querySelector(".model-signature-image");

const heroImageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      heroImageObserver.unobserve(entry.target);
    }
  });
});

[panameraImage, panameraSignatureImage].forEach((element) => {
  if (element) {
    heroImageObserver.observe(element);
  }
});

const highlightSlides = document.querySelectorAll(".highlights-slide");
const highlightArrows = document.querySelectorAll(".highlights-arrow-btn");
let currentHighlightSlideIndex = 0;

const highlightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const slideIndex = Number(entry.target.dataset.index);

      if (entry.isIntersecting) {
        currentHighlightSlideIndex = slideIndex;
        manageNavigationArrows(slideIndex, highlightArrows, highlightSlides);
      }
    });
  },
  { threshold: 0.8 },
);

highlightSlides.forEach((slide, index) => {
  slide.dataset.index = index;
  highlightObserver.observe(slide);
});

highlightArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    const target = event.currentTarget;
    const isPrevious = target.classList.contains("arrow-btn-left");
    const nextIndex = isPrevious
      ? currentHighlightSlideIndex - 1
      : currentHighlightSlideIndex + 1;

    if (highlightSlides[nextIndex]) {
      highlightSlides[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  });
});

function manageNavigationArrows(index, arrows, slides) {
  if (!arrows.length || !slides.length) {
    return;
  }

  arrows[0].classList.toggle("disabled", index === 0);
  arrows[1].classList.toggle("disabled", index === slides.length - 1);
}

const fixedWhiteHeader = document.querySelector(".white-header-fixed");
const revealSection = document.getElementById("section3");
const heroSection = document.getElementById("section1");

if (fixedWhiteHeader && revealSection) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fixedWhiteHeader.classList.add("show");
        }
      });
    },
    { threshold: 0.3 },
  );

  revealObserver.observe(revealSection);
}

if (fixedWhiteHeader && heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedWhiteHeader.classList.remove("show");
      }
    });
  });

  heroObserver.observe(heroSection);
}
