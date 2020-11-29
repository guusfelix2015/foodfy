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

server.get("/recipe", (req, res) => {
  return res.render("recipe");
});

server.get("/recipes/:index", function (req, res) {
  const recipes = []; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  console.log(recipes[recipeIndex]);
})

server.listen(5000, () => {
  console.log("server is running");
});
