function recipeFactory(data) {
  const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

}

function getRecipeCardDOM(name, time, ingredients, description) {
  
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("style", "height: 180px");
  img.classList.add("card-img-top", "bg-light, py-4");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name

  const cardTime = document.createElement("span");
  cardTime.innerHTML = `<i class="bi bi-clock"></i> ${time}`;
}