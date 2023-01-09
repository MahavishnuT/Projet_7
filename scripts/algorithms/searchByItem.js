const searchIngredients = document.querySelector(".ingredients-input");
const searchAppliance = document.querySelector(".appliance-input");
const searchUstensils = document.querySelector(".ustensils-input");

function searchInDropdown(searchInput, filteredSet, container) {

  searchInput.addEventListener("input", (event) => ((arg1, arg2) => {
    filterItems(event, arg1, arg2);
  })(filteredSet, container));
}
searchInDropdown(searchIngredients, ingredientsNoRepeat, ingredientsContainer);
searchInDropdown(searchAppliance, AppliancesNoRepeat, appliancesContainer);
searchInDropdown(searchUstensils, UstensilsNoRepeat, ustensilsContainer);

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

