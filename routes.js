const express = require("express");
const routes = express.Router();

const recipes = require("./controllers/recipesControllers");
const site = require("./controllers/siteController");

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

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita

module.exports = routes;
