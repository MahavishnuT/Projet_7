import { AllAppliancesArray, AllIngredientsArray, AllUstensilsArray, createRecipeList } from "../pages/index.js";

const searchBar = document.querySelector("#search-bar");
const recipesContainer = document.querySelector(".recipes-container");
const allIngredientsDOM = document.querySelectorAll(".ingredientDOM")

console.log(AllIngredientsArray);

searchBar.addEventListener("input", filterRecipes);

function filterRecipes(e) {
  const searchedString = e.target.value.toLowerCase();

  const filteredRecipesArray = [];

  if(searchedString.length >= 3) {
    
    if(AllIngredientsArray.filter(ingredient => ingredient.toLowerCase().includes(searchedString))) {
      console.log(AllIngredientsArray.filter(ingredient => ingredient.toLowerCase().includes(searchedString)));
      // createRecipeList(AllIngredientsArray.filter(ingredient => ingredient.toLowerCase().includes(searchedString)))
    }
    else {
      console.log("BOOOOO!");
    }
  }

}