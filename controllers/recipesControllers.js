const fs = require("fs");
const data = require("../data.json");

exports.index = (req, res) => {
  return res.render("admin/index", { recipes: data.recipes });
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find((recipe) => {
    return id == recipe.id;
  });

  if (!foundRecipe) return res.send("Receita não econtrada");

  const recipe = {
    ...foundRecipe,
  };

  return res.render("admin/show", { recipe });
};

exports.create = (req, res) => {
  return res.render("admin/create");
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Preencha todos os campos");
  }

  let id = 1;
  const lastRecipe = data.recipes[data.recipes.length - 1];

  if (lastRecipe) {
    id = lastRecipe.id + 1;
  }

  data.recipes.push({
    id,
    ...req.body,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("ERROR");
    return res.redirect(`/admin/recipes/${id}`);
  });
};

exports.edit = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find((recipe) => {
    return id == recipe.id;
  });

  if (!foundRecipe) {
    return res.send("Receita não encontrada");
  }

  const recipe = {
    ...foundRecipe,
  };

  return res.render("admin/edit", { recipe });
};

exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundRecipe = data.recipes.find((recipe, foundIndex) => {
    if (id == recipe.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundRecipe) return res.send("Receita não encontrada");

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id),
  };

  data.recipes[index] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Error");
    return res.redirect(`recipes/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;
  const filteredRecipes = data.recipes.filter((recipe) => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile("data.json", JSON.stringify(data.null, 2), (err) => {
    if (err) return res.send("Error");
    return res.redirect("/admin/recipes");
  });
};
