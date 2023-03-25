const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

const modal2 = document.querySelector("#modal");
const openModal2 = document.querySelector(".open-button");
const closeModal2 = document.querySelector(".close-button");

openModal2.addEventListener("click", () => {
  modal2.showModal();
});

closeModal2.addEventListener("click", () => {
  modal2.close();
});
