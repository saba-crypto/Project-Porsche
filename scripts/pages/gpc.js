import "../shared/sidebar.js";

const section4Articles = document.querySelectorAll(".opportunity-article");
const section4ArticlesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});

section4Articles.forEach((article) => {
  section4ArticlesObserver.observe(article);
});
