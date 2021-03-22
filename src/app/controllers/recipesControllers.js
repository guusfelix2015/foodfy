const Recipes = require("../models/Recipes");

module.exports = {
  index(req, res) {
    return res.render("admin/index");
  },

  show(req, res) {
    return;
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
