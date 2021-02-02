function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addNewPass() {
  const preparations = document.querySelector("#preparations");
  const fieldContainerPrepar = document.querySelectorAll(".preparation");

  // Realiza um clone do último ingrediente adicionado
  const newFieldPrepair = fieldContainerPrepar[fieldContainerPrepar.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newFieldPrepair.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newFieldPrepair.children[0].value = "";
  preparations.appendChild(newFieldPrepair);
}

document.querySelector(".add-preparation").addEventListener("click", addNewPass);
