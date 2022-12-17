import { recipes } from "../../data/recipes.js";
console.log(recipes);

const recipesContainer = document.querySelector(".recipes-container");

recipes.forEach(recipe => {
  const recipeModel = new recipeFactory(recipe);
  recipesContainer.appendChild(recipeModel.recipeCardDOM);
});
