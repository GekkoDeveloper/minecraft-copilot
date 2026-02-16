const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalClose = document.getElementById("imageClose");

/* usar event delegation para imágenes dinámicas */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("clickable-image")) {
    modalImg.src = e.target.src;
    modal.classList.add("open");
  }
});

/* cerrar con la X */
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

/* cerrar clickeando fondo */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});
