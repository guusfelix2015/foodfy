const express = require("express");
const routes = express.Router();
const recipes = require("./app/controllers/recipesControllers");
const site = require("./app/controllers/siteController");
const chefs = require("./app/controllers/recipesChefsController");

// SITE
routes.get("/", site.home);
routes.get("/about", site.about);
routes.get("/recipes", site.recipes);
routes.get("/recipe/:id", site.recipe);

//ADMIN
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit);

//ADMIN CHEFS
routes.get("/admin/createChefs", chefs.createChefs);
routes.get("/admin/editChef", chefs.editChef);

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete);

module.exports = routes;
