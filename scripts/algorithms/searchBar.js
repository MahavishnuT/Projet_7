import { createRecipeList } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";

const searchBar = document.querySelector("#search-bar");
const recipesContainer = document.querySelector(".recipes-container");

searchBar.addEventListener("input", filterRecipes);

function filterRecipes(e) {
  const searchedString = e.target.value.toLowerCase();
  
  if(searchedString.length >= 3) {
    recipesContainer.innerHTML = "";
    
    const result = recipes.filter(recipe => {
      return (recipe.name.toLowerCase().includes(searchedString) || 
      recipe.description.toLowerCase().includes(searchedString) ||
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchedString)))      
    })
    console.log(result);
    createRecipeList(result);

    if(!result.length) {
      recipesContainer.innerHTML = `
        <div class="no-result text-center">Aucune recette ne correspond à votre critère... vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</div>
      `
    }
  }
  else {
    recipesContainer.innerHTML = "";
    createRecipeList(recipes);
  }

}