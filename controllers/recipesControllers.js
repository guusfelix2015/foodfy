const fs = require("fs");
const data = require("../data.json");

exports.index = (req, res) => {
  return res.render("admin/index");
};

exports.create = (req, res) => {
  return res.render("admin/create");
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundRecipe = data.recipes.find((recipe) => {
    return (recipe.id = id);
  });

  if (!foundRecipe) return res.send("Receita não econtrada");

  const recipe = {
    ...foundRecipe,
  };

  return res.render("admin/show", { recipe });
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") return res.send("Preencha todos os campos");
  }

  let id = 1;
  const lastRecipe = data.recipes[data.recipes.length + 1];

  if (lastRecipe) {
    id = lastRecipe + 1;
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
