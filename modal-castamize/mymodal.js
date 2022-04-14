const modal = document.getElementById("modal");
const toggleModal = document.querySelectorAll("button");

toggleModal.forEach(showModal => {
  showModal.addEventListener("click", () => {
    modal.classList.toggle("show-modal");
  });
});
