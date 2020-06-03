const overlay = document.querySelector('#overlay');
const popup = document.querySelectorAll('.popup');

function fecharPopUp() {
  overlay.classList.add("hide");
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.add("hide");
  }
}

function openWork(nome) {
  const work = document.querySelector('#pop' + nome);
  work.classList.remove("hide");
  overlay.classList.remove("hide");
}