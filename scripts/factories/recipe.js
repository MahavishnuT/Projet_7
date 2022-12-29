// function recipeFactory(data) {
//   const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

//   const recipeCardDOM = getRecipeCardDOM(name, time, description, ingredients);

//   return {recipeCardDOM};
// }

// function getRecipeCardDOM(name, time, description, ingredients) {
  
//   const column = document.createElement("div");
//   column.classList.add("col-12", "col-md-4");

//   const card = document.createElement("div");
//   card.classList.add("card");

//   const img = document.createElement("img");
//   img.setAttribute("style", "height: 180px");
//   img.classList.add("card-img-top", "bg-light", "py-4");

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   const cardTitle = document.createElement("h5");
//   cardTitle.classList.add("card-title");
//   cardTitle.textContent = name;

//   const cardTime = document.createElement("span");
//   cardTime.innerHTML = `<i class="bi bi-clock"></i> ${time} min`;

//   const cardDescription = document.createElement("p");
//   cardDescription.textContent = description;
//   cardDescription.classList.add("card-text");

//   const cardIngredients = document.createElement("div");
//   const listIngredients = getIngredients(ingredients);
//   for (let i = 0; i < listIngredients.length; i++) {
//     cardIngredients.innerHTML += listIngredients[i]
//   }

//   cardBody.append(cardTitle, cardTime, cardIngredients, cardDescription);
//   card.append(img, cardBody);
//   column.appendChild(card);

//   return(column);
// }

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
      <div class="col-12 col-md-4">
        <div class="card">
          <img style="height: 180px" class="card-img-top bg-light py-4">
          <div class="card-body">
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

// ${this._ingredients.map(ingredient => {
//   `
//     <li>
//       <strong>${ingredient.ingredient}</strong>
//       ${ingredient.quantity ? `: ${ingredient.quantity}` : ""} ${ingredient.unit ? ingredient.unit : ""}
//     </li>
//   `
// })}