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

// const sidebarContentElement = document.querySelector(".navigation-action");

// const carModelsButton = document.getElementById("models-btn");
// const carPurchaseButton = document.getElementById("vehicle-purchase-btn");
// const dealerButton = document.getElementById("dealer-btn");

// carModelsButton.addEventListener("click", () => {
//   sidebarContentElement.classList.remove(
//     "show-vehicle-purchase",
//     "show-dealers-tab",
//   );
//   sidebarContentElement.classList.add("show-models");
// });

// carPurchaseButton.addEventListener("click", () => {
//   sidebarContentElement.classList.remove("show-models", "show-dealers-tab");
//   sidebarContentElement.classList.add("show-vehicle-purchase");
// });

// dealerButton.addEventListener("click", () => {
//   sidebarContentElement.classList.remove(
//     "show-models",
//     "show-vehicle-purchase",
//   );
//   sidebarContentElement.classList.add("show-dealers-tab");
// });
