const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("home", { items: recipes });
});

server.get("/about", (req, res) => {
  return res.render("about");
});

server.get("/recipes", (req, res) => {
  return res.render("recipes", { items: recipes });
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes.find((recipe) => String(recipe.id) === recipeIndex);
  if (!recipe) {
    return res.send("Recipe not found!");
  }
  return res.render("recipe", { item: recipe });
});

server.listen(5000, () => {
  console.log("server is running");
});
