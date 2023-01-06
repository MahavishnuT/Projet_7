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
  filterRecipesByTags(arrayOfTagItems);
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
  }
}

function removeTag(event, array) {
  const targetedButton = event.target;
  const index = array.indexOf(targetedButton.parentElement.innerText.trim());

	array.splice(index, 1);
  targetedButton.parentElement.parentElement.remove();

  if (!array.length) {
		recipesContainer.innerHTML = "";
		createRecipeList(recipes);
    console.log("final array after removal :", array)
	} 
  else {
		filterRecipesByTags(array);
    console.log("final array after removal :", array)
	}
}



