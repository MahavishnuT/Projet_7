const searchIngredients = document.querySelector(".ingredients-input");
const searchAppliance = document.querySelector(".appliance-input");
const searchUstensils = document.querySelector(".ustensils-input");

searchIngredients.addEventListener("input", (event) => ((arg1, arg2) => {
  filterItems(event, arg1, arg2);
})(ingredientsNoRepeat, ingredientsContainer));

searchAppliance.addEventListener("input", (event) => ((arg1, arg2) => {
  filterItems(event, arg1, arg2);
})(AppliancesNoRepeat, appliancesContainer));

searchUstensils.addEventListener("input", (event) => ((arg1, arg2) => {
  filterItems(event, arg1, arg2);
})(UstensilsNoRepeat, ustensilsContainer));

function filterItems(event, arrayOfItems, containerOfItems) {
  const searchedString = event.target.value.toLowerCase();
  containerOfItems.innerHTML = "";

  const result = [...arrayOfItems].filter(item => {
    return (item.toLowerCase().includes(searchedString))
  })
  addItemsToDropdown(result, containerOfItems);
}

