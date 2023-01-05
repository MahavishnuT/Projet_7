import { createRecipeList } from "../pages/index.js";
import { recipes } from "../../data/recipes.js";

// const tagItems = document.querySelectorAll(".tag-items");

const tagsContainer = document.querySelector("#tags");
const arrayOfTagItems = [];

function addTagToContainer(event) {

  tagsContainer.innerHTML += `
    <div class="col-2">
      <div class="py-2 tag-item">
        ${event.target.textContent}
      </div>
    </div>
  `
  arrayOfTagItems.push(event.target.textContent);
  console.log(arrayOfTagItems);
  filterRecipesByTags();
}

function loopOnArrayOfTagItems() {
  arrayOfTagItems.forEach(element => {
    return element
  })
}

function filterRecipesByTags() {

  const result = recipes.filter(recipe => {
    return (recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(loopOnArrayOfTagItems())) ||
    recipe.appliance.toLowerCase().includes(loopOnArrayOfTagItems()) ||
    recipe.ustensils.forEach((ustensil) => ustensil.toLowerCase().includes(loopOnArrayOfTagItems()))
    )
  })

  createRecipeList(result);
}



