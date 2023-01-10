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
            <h5 class="card-tilte">${this._name}</h5>
            <span>
              <i class="bi bi-clock"></i> ${this._time} min
            </span>
            <p class="card-text">${this._description}</p>
            <div>
              ${getIngredients(this._ingredients).join("")} 
            </div>
          </div>
        </div>
      </div>
    `
    return card;
  }
}

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
