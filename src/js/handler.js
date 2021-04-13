let win = 0;
const winEl = document.querySelector('span.win');

export default function handlerFactory(timer, timer2, fail, failEl) {
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
