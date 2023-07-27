const search = document.querySelector(".search-icon");
const searchInp = document.querySelector(".search-inp");

search.addEventListener("click", () => {
  searchInp.classList.toggle("visible");
  console.log("asc");
});
