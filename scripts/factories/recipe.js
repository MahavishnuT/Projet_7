function recipeFactory(data) {
  const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

  const recipeCardDOM = getRecipeCardDOM(name, time, description, ingredients);

  return {recipeCardDOM};
}

function getRecipeCardDOM(name, time, description, ingredients) {
  
  const column = document.createElement("div");
  column.classList.add("col-12", "col-md-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("style", "height: 180px");
  img.classList.add("card-img-top", "bg-light", "py-4");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;

  const cardTime = document.createElement("span");
  cardTime.innerHTML = `<i class="bi bi-clock"></i> ${time} min`;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;
  cardDescription.classList.add("card-text");

  const cardIngredients = document.createElement("div");
  const listIngredients = getIngredients(ingredients);
  for (let i = 0; i < listIngredients.length; i++) {
    cardIngredients.innerHTML += listIngredients[i]
  }

  cardBody.append(cardTitle, cardTime, cardIngredients, cardDescription);
  card.append(img, cardBody);
  column.appendChild(card);

  return(column);
}

function getIngredients(ingredients) {

  let ingredientsArray = []

    for (let i = 0; i < ingredients.length; i++) {
      let ingredient = ingredients[i];
      let itemsDOM = `
        <span class="fw-bold">${ingredient.ingredient ? ingredient.ingredient : ""}</span>
        <span>: ${ingredient.quantity ? ingredient.quantity : ""}  ${ingredient.unit ? ingredient.unit : ""}</span></br>
      `
      ingredientsArray.push(itemsDOM);
    }
  
  return (ingredientsArray);
}
