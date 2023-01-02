import { ingredientsNoRepeat, AppliancesNoRepeat, UstensilsNoRepeat, addItemsToDropdown } from "../pages/index.js";

const searchIngredients = document.querySelector(".ingredients-input");
const searchAppliance = document.querySelector(".ingredients-input");
const searchUstensils = document.querySelector(".ingredients-input");
const ingredientsContainer = document.querySelector(".ingredients-container");
const appliancesContainer = document.querySelector(".appliances-container");
const ustensilsContainer = document.querySelector(".ustensils-container");
console.log("ingredientsNoRepeat", ingredientsNoRepeat);



searchIngredients.addEventListener("input", (event) => ((arg1, arg2) => {
  filterItems(event, arg1, arg2);
  
})(ingredientsNoRepeat, ingredientsContainer));
// searchAppliance.addEventListener("input", filterItems(e, AppliancesNoRepeat, appliancesContainer));
// searchUstensils.addEventListener("input", filterItems(e, UstensilsNoRepeat, ustensilsContainer));

function filterItems(event, arrayOfItems, containerOfItems) {
  const searchedString = event.target.value.toLowerCase();
  containerOfItems.innerHTML = "";
  console.log("arrayOfItems", arrayOfItems);

  const result = arrayOfItems.forEach(item => {
    return (item.toLowerCase().includes(searchedString))
  })
  addItemsToDropdown(result, containerOfItems);
}

