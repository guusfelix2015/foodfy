const cards = document.querySelectorAll(".card");
const showHides = document.getElementsByClassName("topic");
for (let card of cards) {
  card.addEventListener("click", function () {
    const recipeId = card.getAttribute("Id");
    window.location.href = `/recipes/${recipeId}`;
  });
}

for (let showHide of showHides) {
  const button = showHide.querySelector("button");
  button.addEventListener("click", () => {
    if (button.innerHTML == "ESCONDER") {
      showHide.querySelector(".topic-content").classList.add("hide");
      button.innerHTML = "MOSTRAR";
    } else {
      showHide.querySelector(".topic-content").classList.remove("hide");
      button.innerHTML = "ESCONDER";
    }
  });
}
