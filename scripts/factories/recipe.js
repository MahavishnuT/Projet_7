function recipeFactory(data) {
  const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

  const recipeCardDOM = getRecipeCardDOM(name, time, description);

  return {recipeCardDOM};
}

function getRecipeCardDOM(name, time, description) {
  
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
  cardTime.innerHTML = `<i class="bi bi-clock"></i> ${time}`;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;
  cardDescription.classList.add("card-text");

  cardBody.append(cardTitle, cardTime, cardDescription);
  card.append(img, cardBody);
  column.appendChild(card);

  return(column);
}