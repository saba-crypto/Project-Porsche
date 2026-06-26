//section1 (hero section)
const heroVideo = document.querySelector(".page-video");
const videoToggleButton = document.querySelector(".video-playback-btn");

videoToggleButton.addEventListener("click", () => {
  toggleVideo(heroVideo, videoToggleButton);
});

//section2
const smallArticles = document.querySelectorAll(".small-article");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    setTimeout(() => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    }, i * 200);
  });
}, {});

smallArticles.forEach((article) => {
  observer.observe(article);
});

//section3 (card models grid)
const bodyElement = document.body;
const carModelSection = document.querySelector(".section3");
const carModelArticles = Array.from(
  document.querySelectorAll(".car-model-article"),
);
const carModelVideos = document.querySelectorAll(".car-video");
const carModelImages = document.querySelectorAll(".car-image");

let currentArticle = carModelArticles[0];

const sliderVideoToggle = document.querySelector(".slider-video-toggle");
const sliderNavItems = document.querySelectorAll(".slider-nav-item");

//changes background to black when section is shown
const bodyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        bodyElement.classList.add("dark-mode");
      } else {
        bodyElement.classList.remove("dark-mode");
      }
    });
  },
  { threshold: 0.2 },
);
bodyObserver.observe(carModelSection);

//controls car model slide logic
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentArticle = entry.target;
        const articleIndex = entry.target.dataset.index;

        entry.target.classList.add("is-viewed");
        sliderNavItems[articleIndex].classList.add("selected");
        sliderVideoToggle.classList.remove("pause");

        carModelVideos[articleIndex].currentTime = 0;
      } else {
        entry.target.classList.remove("is-viewed");
        sliderNavItems[entry.target.dataset.index].classList.remove("selected");
      }
    });
  },
  { threshold: 0.7 },
);
carModelArticles.forEach((article) => {
  videoObserver.observe(article);
});

//controls car model slide play/pause toggle
sliderVideoToggle.addEventListener("click", () => {
  if (currentArticle) {
    currentArticle.classList.toggle("is-viewed");
    sliderVideoToggle.classList.toggle("pause");
  }
});

//forces carModelVideo to start over when hovering
carModelImages.forEach((image, i) => {
  image.addEventListener("mouseenter", () => {
    carModelVideos[i].currentTime = 0;
  });
});

//sidebar
const menuButton = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
menuButton.addEventListener("click", () => {
  sidebar.classList.add("show");
});

const navCloseButton = document.getElementById("nav-close-btn");
navCloseButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
const sidebarBackground = document.getElementById("sidebar-background");
sidebarBackground.addEventListener("click", () => {
  sidebar.classList.remove("show");
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
