const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-show");
});
