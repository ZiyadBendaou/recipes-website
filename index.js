const featuredRec = document.querySelector(".featured-recipes");
const resultsContainer = document.querySelector(".result-recipes");

window.addEventListener("pageshow", () => {
  featuredRec.innerHTML = "";
  randomRec();
});

async function randomRec() {
  for (let i = 0; i < 3; i++) {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const res = await fetch(url);
    const data = await res.json();

    recRender(data);
  }
}

function recRender(recipe) {
  const meal = recipe.meals[0];
  const link = document.createElement("a");
  link.href = `recipe.html?id=${meal.idMeal}`;
  link.className = "featured-link";
  const container = document.createElement("div");
  container.className = "featured-recipe";
  container.innerHTML = `<img src="${recipe.meals[0].strMealThumb}" alt="recipe image" class="featured-img">
            <h4 class="recipe-title">${recipe.meals[0].strMeal}</h4>`;
  link.appendChild(container);
  featuredRec.appendChild(link);
}
const resultCont = document.querySelector(".result-recipes");
const searchBtn = document.querySelector(".search-icon");
searchBtn.addEventListener("click", () => {
  resultsContainer.innerHTML = "";
  let searchText = document.querySelector(".search-text").value.trim();
  createResult(searchText);
});

async function createResult(call) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${call}`;
  const res = await fetch(url);
  const data = await res.json();
  resultRender(data);
}

function resultRender(results) {
  const result = results.meals;
  result.forEach((r) => {
    const link = document.createElement("a");
    link.href = `recipe.html?id=${r.idMeal}`;
    link.className = "featured-link";
    const container = document.createElement("div");
    container.className = "featured-recipe";
    container.innerHTML = `<img src="${r.strMealThumb}" alt="recipe image" class="featured-img">
            <h4 class="recipe-title">${r.strMeal}</h4>`;
    link.appendChild(container);
    resultCont.appendChild(link);
  });
}

const contactForm = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;
  formMsg.textContent = "Thank you! Your message has been sent.";
  contactForm.reset();
});
