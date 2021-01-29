const data = require("../data.json");

exports.home = (req, res) => {
  return res.render("site/home", { recipes: data.recipes });
};

exports.about = (req, res) => {
  return res.render("site/about");
};

exports.recipes = (req, res) => {
  return res.render("site/recipes", { recipes: data.recipes });
};

exports.recipe = (req, res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find((recipe) => {
    return id == recipe.id;
  });
  if (!foundRecipe) return res.send("Recipe not found!");
  const recipe = {
    ...foundRecipe,
  };
  return res.render("site/recipe", { recipe });
};
