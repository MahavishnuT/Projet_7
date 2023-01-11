const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", filterRecipes);

function filterRecipes(e) {
  const searchedString = e.target.value.toLowerCase();
  
  if(searchedString.length >= 3) {
    recipesContainer.innerHTML = "";
    const result = [];

    for (let i = 0; i < recipes.length; i++) {
      const { name, ingredients, description } = recipes[i];
      const includesName = name.toLowerCase().includes(searchedString);
      const includesDescription = description.toLowerCase().includes(searchedString);
      let includesIngredients = false;
      for (let j = 0; j < ingredients.length; j++) {
        if (ingredients[j].ingredient.toLowerCase().includes(searchedString)) {
          includesIngredients = true;
        }        
      }

      if (includesName || includesDescription || includesIngredients) {
        result.push(recipes[i]);
      }

    }
    
    createRecipeList(result);

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