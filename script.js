const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const imgID = card.getAttribute("id");
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("#img__content").src = `/assets/${imgID}.png`;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("#img__content").src = "";
});
