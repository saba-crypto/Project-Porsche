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
