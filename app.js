const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-show");
});

const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
