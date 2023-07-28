const search = document.querySelector(".search-icon");
const searchInp = document.querySelector(".search-inp");
const button = document.querySelector(".menu");
const panel = document.querySelector(".panel");
const dashboard = document.querySelector(".dashboard");

search.addEventListener("click", () => {
  searchInp.classList.remove("no-animation");
  searchInp.classList.toggle("visible");
});

button.addEventListener("click", () => {
  panel.classList.toggle("show-dashboard");
  dashboard.classList.toggle("slide-out-dashboard");
});
