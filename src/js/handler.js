let win = 0;
let fail = 0;
const winEl = document.querySelector('span.win');
const failEl = document.querySelector('span.fail');

export default function handlerFactory(timer) {
  return (event) => {
    const cell = event.target.closest('.goblin');
    if (fail === 5) {
      clearInterval(timer);
      alert('Игра закончена. Вы проиграли');
      return;
    }
    if (!cell) {
      fail += 1;
      failEl.textContent = fail;
      return;
    }
    win += 1;
    winEl.textContent = win;
  };
}
