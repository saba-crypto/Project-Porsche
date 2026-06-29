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

const navigationButtons = document.querySelectorAll(".navigation-btn");
const sidebarContentTabs = document.querySelectorAll(".navigation-tab");

navigationButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    navigationButtons.forEach((button, i) => {
      button.classList.remove("selected");
      sidebarContentTabs[i].classList.remove("show");
    });
    button.classList.add("selected");
    sidebarContentTabs[i].classList.add("show");
  });
});
