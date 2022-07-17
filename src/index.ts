import Relogio from './Class-Relogio.m';
const relogio = new Relogio();

document.addEventListener('DOMContentLoaded', iniciarRelogio);

function iniciarRelogio() {
  setInterval(() => {
    relogio.atualizarHorario();
  }, 1000);
}
