//video playback button
const heroVideo = document.querySelector(".page-video");
const videoToggleButton = document.querySelector(".video-playback-btn");

videoToggleButton.addEventListener("click", () => {
  toggleVideo();
});
function toggleVideo() {
  if (heroVideo.paused) {
    heroVideo.play();
    videoToggleButton.classList.remove("video-paused");
  } else {
    heroVideo.pause();
    videoToggleButton.classList.add("video-paused");
  }
}

//section2 animations
const smallArticles = document.querySelectorAll(".small-article");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    setTimeout(() => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    }, i * 200);
  });
}, {});

smallArticles.forEach((article) => {
  observer.observe(article);
});

//section3 animations
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 900) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
