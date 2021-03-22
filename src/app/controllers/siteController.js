const Recipes = require("../models/Recipes");

exports.home = (req, res) => {
  return res.render("site/home", {});
};

exports.about = (req, res) => {
  return res.render("site/about");
};

exports.recipes = (req, res) => {
  return res.render("site/recipes", {});
};

exports.recipe = (req, res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find((recipe) => {});
  if (!foundRecipe) return res.send("Recipe not found!");
  const recipe = {
    ...foundRecipe,
  };
  return res.render("site/recipe", {});
};
