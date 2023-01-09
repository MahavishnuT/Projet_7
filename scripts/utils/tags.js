const tagsContainer = document.querySelector("#tags");
const closeTagButtons = document.querySelectorAll(".close-tag");
const arrayOfTagItems = [];

function addTagToContainer(event) {
  arrayOfTagItems.push(event.target.textContent);

  tagsContainer.innerHTML += `
    <div class="col-2">
      <div class="py-2 tag-item">
        ${event.target.textContent}
        <button onclick="removeTag(event, arrayOfTagItems)">
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
  `
  filterRecipesByTags(arrayOfTagItems, event);
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

  console.log("result", result);
  console.log("ingredientsNoRepeat", ingredientsNoRepeat);

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
  console.log("tagsDOM",tagsDOM)
  tagsDOM.forEach(tag => {
    ingredientsSetFiltered.forEach(item => {
      if(tag.innerText.toLowerCase().trim() === item.toLowerCase()) {
        ingredientsSetFiltered.delete(item);
      }
    }) ||
    applianceSetFiltered.forEach(item => {
      if(tag.innerText.toLowerCase().trim() === item.toLowerCase()) {
        applianceSetFiltered.delete(item);
      }
    }) ||
    ustensilsSetFiltered.forEach(item => {
      if(tag.innerText.toLowerCase().trim() === item.toLowerCase()) {
        ustensilsSetFiltered.delete(item);
      }
    })
  })

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



