import { AllAppliancesArray, AllIngredientsArray, AllUstensilsArray } from "../pages/index.js";

const searchBar = document.querySelector("#search-bar");
const recipesContainer = document.querySelector(".recipes-container");

console.log(AllIngredientsArray);

searchBar.addEventListener("input", filterRecipes);

function filterRecipes(e) {
  const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

  const filteredRecipesArray = [];

  if(searchedString.length >= 3) {
    
    if(AllIngredientsArray.some(ingredient => ingredient.toLowerCase().replace(/\s/g, "") == searchedString)) {
      console.log("it's a match!");
    }
    else {
      console.log("BOOOOO!");
    }
  }

}