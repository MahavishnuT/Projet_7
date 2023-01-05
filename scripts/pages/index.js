import { recipes } from "../../data/recipes.js";
console.log(recipes);

const recipesContainer = document.querySelector(".recipes-container");
const ingredientsContainer = document.querySelector(".ingredients-container");
const appliancesContainer = document.querySelector(".appliances-container");
const ustensilsContainer = document.querySelector(".ustensils-container");

export function createRecipeList(filteredArray) {
  filteredArray.forEach(recipe => {
    recipesContainer.innerHTML += new RecipeCard(recipe).recipeCard;
  });
}

createRecipeList(recipes);

// Gather ingredients, appliance and ustensils with no repeat

const AllIngredientsArray = [];
for (let i = 0; i < recipes.length; i++) {
  let ingredients = recipes[i].ingredients;
  ingredients.map(({ingredient}) => {
    AllIngredientsArray.push(ingredient);
  });
}
export const ingredientsNoRepeat = new Set(AllIngredientsArray);

const AllAppliancesArray = [];
for (let i = 0; i < recipes.length; i++) {
  let appliances = recipes[i].appliance;
  AllAppliancesArray.push(appliances);
}
export const AppliancesNoRepeat = new Set(AllAppliancesArray);

const AllUstensilsArray = [];
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    let ustensils = recipes[i].ustensils[j];
    AllUstensilsArray.push(ustensils);
  }
}
export const UstensilsNoRepeat = new Set(AllUstensilsArray);

/**
 * Add items to the three dropdown menus
 * @param {Array} norepeat 
 * @param {HTMLElement} container 
 */

export function addItemsToDropdown(norepeat, container) {
  norepeat.forEach(item => {
    container.innerHTML += `
    <li class="dropdown-item text-white" onclick="addTagToContainer(event)">${item.charAt(0).toUpperCase() + item.slice(1)}</li>
    `
  });
}

addItemsToDropdown(ingredientsNoRepeat, ingredientsContainer);

addItemsToDropdown(AppliancesNoRepeat,  appliancesContainer);

addItemsToDropdown(UstensilsNoRepeat, ustensilsContainer);

