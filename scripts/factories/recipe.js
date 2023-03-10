/**
 * Create a recipe card with the data
 */
class RecipeCard {
  constructor(data) {
    this._id = data.id;
		this._name = data.name;
		this._description = data.description;
		this._time = data.time;
		this._servings = data.servings;
		this._ustensils = data.ustensils;
		this._ingredients = data.ingredients;
		this._appliance = data.appliance;
  }

  get recipeCard() {

    const card = `
      <div class="col-12 col-lg-4">
        <div class="card">
          <img style="height: 180px" class="card-img-top bg-secondary py-4">
          <div class="card-body bg-light">
            <div class="row-1-card">
              <h5 class="card-tilte">${this._name}</h5>
              <span class="card-time">
              <i class="fa-regular fa-clock"></i> ${this._time} min
              </span>
            </div>
            <div class="row-2-card">
              <div class="card-ingredients">
              ${getIngredients(this._ingredients).join("")} 
              </div>
              <p class="card-text">${this._description}</p>
            </div>
          </div>
        </div>
      </div>
    `
    return card;
  }
}

/**
 * 
 * @param {Object} ingredients 
 * @returns an array with all the ingredients
 */
function getIngredients(ingredients) {

  let ingredientsArray = []

    for (let i = 0; i < ingredients.length; i++) {
      let ingredient = ingredients[i];
      let itemsDOM = `
        <span class="fw-bold ingredientDOM">${ingredient.ingredient ? ingredient.ingredient : ""}</span>
        <span>: ${ingredient.quantity ? ingredient.quantity : ""}  ${ingredient.unit ? ingredient.unit : ""}</span></br>
      `
      ingredientsArray.push(itemsDOM);
    }
      
  return (ingredientsArray);
}
