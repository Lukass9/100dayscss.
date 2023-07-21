const wrapp = document.querySelector(".wrapp");
const line = document.querySelectorAll(".no-animate");
wrapp.addEventListener("click", () => {
  wrapp.classList.toggle("active");
  line.forEach((el) => el.classList.remove("no-animate"));
});
