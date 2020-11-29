const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const imgID = card.getAttribute("id");
  const title = card.getAttribute("title");
  const author = card.getAttribute("author");
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("#img__content").src = `../assets/${imgID}.png`;
    modalOverlay.querySelector("h2").innerText = title;
    modalOverlay.querySelector("h4").innerText = author;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("#img__content").src = "";
});
