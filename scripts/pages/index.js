async function getRecipes() {
  const dataRecipes = await fetch("../data/recipes.js")

  if (dataRecipes) {
      const data = await dataRecipes.json();
      console.log(data)
      return data;
  }
  else {
      return console.log("an error occured")
  }
}