import getRandomIntInclusive from './getnumbers';

export default function setGoblin() {
  const row = getRandomIntInclusive(1, 4);
  const column = getRandomIntInclusive(1, 4);

  const rowEl = document.querySelectorAll('div[data-row]')[row - 1];
  const cellEl = rowEl.querySelectorAll('div[data-column]')[column - 1];

  cellEl.classList.add('goblin');
}
