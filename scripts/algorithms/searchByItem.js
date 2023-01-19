const searchIngredients = document.querySelector(".ingredients-input");
const searchAppliance = document.querySelector(".appliance-input");
const searchUstensils = document.querySelector(".ustensils-input");

/**
 * Add an event listener to the three items input
 * @param {HTMLElement} searchInput 
 * @param {Set} filteredSet 
 * @param {HTMLElement} container 
 */
function searchInDropdown(searchInput, filteredSet, container) {

  searchInput.addEventListener("input", (event) => ((arg1, arg2) => {
    filterItems(event, arg1, arg2);
  })(filteredSet, container));
}
searchInDropdown(searchIngredients, ingredientsNoRepeat, ingredientsContainer);
searchInDropdown(searchAppliance, AppliancesNoRepeat, appliancesContainer);
searchInDropdown(searchUstensils, UstensilsNoRepeat, ustensilsContainer);

/**
 * Filter through the items via the user's input
 * @param {event} event 
 * @param {array} arrayOfItems 
 * @param {HTMLElement} containerOfItems 
 */
function filterItems(event, arrayOfItems, containerOfItems) {
  const searchedString = event.target.value.toLowerCase();
  containerOfItems.innerHTML = "";

  const result = [...arrayOfItems].filter(item => {
    return (item.toLowerCase().includes(searchedString))
  })
  addItemsToDropdown(result, containerOfItems);
}

