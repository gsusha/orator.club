let modal = document.getElementById("modal");

let btn = document.getElementById("order-btn");

let span = document.getElementsByClassName("modal__close")[0];

function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "unset";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}