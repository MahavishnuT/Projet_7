const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", filterRecipes);

/**
 * Filter through all recipes name, ingredients and description via the main Search Bar
 * @param {event} e 
 */
function filterRecipes(e) {
  const searchedString = e.target.value.toLowerCase();
  
  if(searchedString.length >= 3) {
    recipesContainer.innerHTML = "";
    
    const result = recipes.filter(recipe => {
      return (recipe.name.toLowerCase().includes(searchedString) || 
      recipe.description.toLowerCase().includes(searchedString) ||
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchedString)))      
    })
    createRecipeList(result);
    filterItemListsByRecipeResult(result);
    filterRecipesByTags(arrayOfTagItems, result);
    
    if(!result.length) {
      recipesContainer.innerHTML = `
      <div class="no-result text-center">Aucune recette ne correspond à votre critère... vous pouvez
      chercher « tarte aux pommes », « poisson », etc.</div>
      `
    }
  }
  else {
    recipesContainer.innerHTML = "";
    createRecipeList(recipes);
  }

}