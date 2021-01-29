const express = require("express");
const routes = express.Router();

const site = require("./controllers/siteController");

routes.get("/", site.home);
routes.get("/about", site.about);
routes.get("/recipes", site.recipes);
routes.get("/recipe/:id", site.recipe);

module.exports = routes;
