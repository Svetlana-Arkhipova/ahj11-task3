const winEl = document.querySelector('span.win');
const failEl = document.querySelector('span.fail');

export default function updateScore(state) {
  winEl.textContent = state.win;
  failEl.textContent = state.fail;
}
