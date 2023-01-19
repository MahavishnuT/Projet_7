const tagsContainer = document.querySelector("#tags");
const closeTagButtons = document.querySelectorAll(".close-tag");
const arrayOfTagItems = [];


/**
 * Display the item that was clicked on in the tag container
 * @param {HTMLElement} event 
 */
function addTagToContainer(event) {

  arrayOfTagItems.push(event.target.textContent);
  
  tagsContainer.innerHTML += `
  <div class="col-2 tag-col">
  <div class="py-2 tag-item ${colorForTag(event)}">
        <span class="tag-text">
          ${event.target.textContent}
        </span>
        <button onclick="removeTag(event, arrayOfTagItems)" class="close-tag-button">
          <i class="fa-regular fa-circle-xmark"></i>
          </button>
      </div>
    </div>
    `
  filterRecipesByTags(arrayOfTagItems, recipes);
}

/**
 * Color the background tag selected depending whether it's an ingredient, an appliance or an ustensil
 * @param {HTMLElement} event 
 * @returns a class name associated with the CSS
 */
function colorForTag(event) {
  if(event.target.parentElement.parentElement.classList.contains("ingredients-container")) {
    return (`tag-item-blue`);
  }
  else if(event.target.parentElement.parentElement.classList.contains("appliances-container")) {
    return (`tag-item-green`);
  }
  else if(event.target.parentElement.parentElement.classList.contains("ustensils-container")) {
    return (`tag-item-red`);
  }
}

/**
 * Filter and display all the recipes containing the tag(s) in their ingredients, appliance or ustensils
 * @param {array} array 
 */
function filterRecipesByTags(array, recipeList) {

  const resultTags = recipeList.filter((recipe) => {
    return array.every((item) => {
      const formatedItem = item.toLowerCase();
      return (
        recipe.ingredients.some((i) => {
					return i.ingredient.toLowerCase().includes(formatedItem);
				}) ||
				recipe.appliance.toLowerCase().includes(formatedItem) ||
				recipe.ustensils.some((ustensil) => {
					return ustensil.toLowerCase() === formatedItem;
        })
      )
    })
  })
  
  if (resultTags.length) {
    recipesContainer.innerHTML = "";
    createRecipeList(resultTags);
    filterItemListsByRecipeResult(resultTags)
  }
}

/**
 * Filter the items lists with the chosen tags 
 * @param {array} resultArrayOfObjects are the recipes left after filtering by tag
 */
function filterItemListsByRecipeResult(resultArrayOfObjects) {
  // We create new Sets containing the items in the results 
  const ingredientsSetFiltered = new Set();
  resultArrayOfObjects.forEach(ingredient => {
    ingredient.ingredients.forEach(ingredient2 => {
      ingredientsSetFiltered.add(ingredient2.ingredient);
    })
  })

  const applianceSetFiltered = new Set();
  resultArrayOfObjects.forEach(appliance => {
    applianceSetFiltered.add(appliance.appliance);   
  })

  const ustensilsSetFiltered = new Set();
  resultArrayOfObjects.forEach(ustensil => {
    ustensil.ustensils.forEach(ustensil2 => {
      ustensilsSetFiltered.add(ustensil2);
    })
  })
  
  const tagsDOM = document.querySelectorAll(".tag-item");
  tagsDOM.forEach(tag => {
    deleteClickedItemFromSet(ingredientsSetFiltered, tag) ||
    deleteClickedItemFromSet(applianceSetFiltered, tag) ||
    deleteClickedItemFromSet(ustensilsSetFiltered, tag)
  })

  /**
   * Removes the tag clicked from the Set so it doesn't appear in the next user's search
   * @param {Set} setFiltered 
   * @param {HTMLElement} tag 
   */
  function deleteClickedItemFromSet(setFiltered, tag) {
    setFiltered.forEach(item => {
      if(tag.innerText.toLowerCase().trim() === item.toLowerCase()) {
        setFiltered.delete(item);
      }
    })
  }

  addItemsToDropdown(ingredientsSetFiltered, ingredientsContainer);
  addItemsToDropdown(applianceSetFiltered, appliancesContainer);
  addItemsToDropdown(ustensilsSetFiltered, ustensilsContainer);

  searchInDropdown(searchIngredients, ingredientsSetFiltered, ingredientsContainer);
  searchInDropdown(searchAppliance, applianceSetFiltered, appliancesContainer);
  searchInDropdown(searchUstensils, ustensilsSetFiltered, ustensilsContainer);

}

/**
 * function to delete the tag from the DOM and the arrayOfTagItems
 * @param {event} event 
 * @param {array} array 
 */
function removeTag(event, array) {
  const targetedButton = event.target;
  const index = array.indexOf(targetedButton.parentElement.innerText.trim());

	array.splice(index, 1);
  targetedButton.parentElement.parentElement.remove();

  if (!array.length) {
		recipesContainer.innerHTML = "";
		createRecipeList(recipes);
    addItemsToDropdown(ingredientsNoRepeat, ingredientsContainer);
    addItemsToDropdown(AppliancesNoRepeat,  appliancesContainer);
    addItemsToDropdown(UstensilsNoRepeat, ustensilsContainer);
	} 
  else {
		filterRecipesByTags(array, recipes);
	}
}



