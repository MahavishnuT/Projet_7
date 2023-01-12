const tagsContainer = document.querySelector("#tags");
const closeTagButtons = document.querySelectorAll(".close-tag");
const arrayOfTagItems = [];

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
  filterRecipesByTags(arrayOfTagItems);
}

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

function filterRecipesByTags(array) {

  const result = recipes.filter((recipe) => {
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

  if (result.length) {
    recipesContainer.innerHTML = "";
    createRecipeList(result);
    filterItemListsByRecipeResult(result)
  }
}

function filterItemListsByRecipeResult(resultArrayOfObjects) {
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
		filterRecipesByTags(array);
	}
}



