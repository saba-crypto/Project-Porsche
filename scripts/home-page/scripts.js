//video playback button
const heroVideo = document.querySelector(".page-video");
const videoToggleButton = document.querySelector(".video-playback-btn");

videoToggleButton.addEventListener("click", () => {
  toggleVideo(heroVideo, videoToggleButton);
});

//section2 animations
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

//section3 animations
const bodyElement = document.body;
const section = document.querySelector(".section3");
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
bodyObserver.observe(section);

const sectionVideos = document.querySelectorAll(".car-video");
const sectionArticles = document.querySelectorAll(".car-model-article");
const sliderNavItems = document.querySelectorAll(".slider-nav-item");
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-viewed");
        sliderNavItems[entry.target.dataset.index].classList.add("selected");
      } else {
        entry.target.classList.remove("is-viewed");
        sliderNavItems[entry.target.dataset.index].classList.remove("selected");
      }
    });
  },
  { threshold: 0.7 },
);
sectionArticles.forEach((article) => {
  videoObserver.observe(article);
});

const carModelImages = document.querySelectorAll(".car-image");
const carModelVideos = document.querySelectorAll(".car-video");
carModelImages.forEach((image, i) => {
  image.addEventListener("mouseenter", () => {
    carModelVideos[i].currentTime = 0;
  });
});
const sliderVideoToggle = document.querySelector(".slider-video-toggle");
sliderVideoToggle.addEventListener("click", () => {
  carModelVideos.forEach((video) => {
    toggleVideo(video, sliderVideoToggle);
  });
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
