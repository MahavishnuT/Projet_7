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
  const targettedButton = event.target;
  const index = array.indexOf(targettedButton.parentElement.innerText.trim());
  console.log("index", index);
  console.log("array", array);
  targettedButton.parentElement.parentElement.remove();
	array.splice(index, 1);
  console.log("array.splice(index, 1) :", array.splice(index, 1))
  if (!array.length) {
		recipesContainer.innerHTML = "";
		createRecipeList(recipes);
	} else {
		filterRecipesByTags(array);
    console.log("final array after removal :", array)
	}
}



