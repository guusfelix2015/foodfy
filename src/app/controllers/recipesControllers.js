const Recipes = require("../models/Recipes");
const { date } = require("../../lib/utils");

module.exports = {
  index(req, res) {
    return res.render("admin/index");
  },

  create(req, res) {
    return res.render("admin/create");
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Preencha todos os campos");
    }

    Recipes.create(req.body, (recipe) => {
      return res.redirect(`/recipes/${recipe.id}`);
    });
  },

  show(req, res) {
    Recipes.find(req.params.id, (recipe) => {
      if (!recipe) return res.send("Recipe not found");

      recipe.created_at = date(recipe.created_at).format;

      return res.render("admin/show", { recipe });
    });
  },

  edit(req, res) {
    return;
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Preencha todos os campos");
    }

    let { chef_id, image, title, ingredients, preparation } = req.body;

    return;
  },

  delete(req, res) {
    return;
  },
};
