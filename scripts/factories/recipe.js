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
  cardIngredients.textContent = `${getIngredients(ingredients)} : `
  // console.log(getIngredients(ingredients))

  cardBody.append(cardTitle, cardTime, cardIngredients, cardDescription);
  card.append(img, cardBody);
  column.appendChild(card);

  return(column);
}

function getIngredients(ingredients) {

  // let ingredientsObj = {}

    // for (let i = 0; i < ingredients.length; i++) {

      // Object.assign(ingredientsObj, ingredients[i]);
      const toObject = (ingredients, ingredient) => Object.fromEntries(ingredients.map((it) => [it[ingredient], it]));
    // }
  
  // console.log(toObject(ingredients))
  // return (ingredientsObj)
}
// function getQuantity(ingredients) {

//   const quantityArray = []

//     for (let i = 0; i < ingredients.length; i++) {

//       quantityArray.push(ingredients[i].quantity);
      
//     }
  
//   // console.log(ingredientsArray)
//   return (quantityArray)
// }

