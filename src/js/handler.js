let win = 0;
const winEl = document.querySelector('span.win');
let fail = 0;
const failEl = document.querySelector('span.fail');

let timer2 = setInterval((timer) => {
  fail += 1;
  failEl.textContent = fail;
  if (fail === 5) {
    clearInterval(timer);
    clearInterval(timer2);
    alert('Игра закончена. Вы проиграли');
  }
}, 1000);

export default function handlerFactory(timer) {
  return (event) => {
    const cell = event.target.closest('.goblin');
    clearInterval(timer2); // если кликнули, то остановить отсчет времени
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
    timer2 = setInterval(() => { // запустить отсчет времени
      fail += 1;
      failEl.textContent = fail;
      if (fail === 5) {
        clearInterval(timer);
        clearInterval(timer2);
        alert('Игра закончена. Вы проиграли');
      }
    }, 1000);
  };
}
