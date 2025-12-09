const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const contp = document.querySelector(".recipe-container");

finder();

async function finder() {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  render(data);
  console.log(data);
}

const render = (recipe) => {
  const meal = recipe.meals[0];
  const cont = document.createElement("div");
  cont.innerHTML = `<div class="main-intern">
  <img src="${meal.strMealThumb}" alt="" class="recipe-img">
  <h1>${meal.strMeal}</h1>
  </div>
  <div class="recipe-details">
  <ul class="ingredients">
  </ul>
  <div class="instructions">
  ${meal.strInstructions.replace(/▢/g, "")}
  </div>
  </div>`;
  contp.appendChild(cont);
  rendIngred(meal);
};

function rendIngred(rect) {
  const listIngred = document.querySelector(".ingredients");
  for (let i = 1; i <= 20; i++) {
    const value = rect[`strIngredient${i}`];
    const measure = rect[`strMeasure${i}`];
    if (value) {
      const li = document.createElement("li");
      li.textContent = `${measure} ${value}`;
      li.className = "ingred-item";
      listIngred.appendChild(li);
    }
  }
}
