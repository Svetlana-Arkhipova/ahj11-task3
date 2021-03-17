import setGoblin from './setgoblin';

let win = 0;
let fail = 0;
let winEl = document.querySelector('span.win');
let failEl = document.querySelector('span.fail');

setGoblin();
let timer = setInterval(() => { 
    document.querySelector('.goblin').classList.remove('goblin');
    setGoblin();
}, 1000);

const field = document.querySelector('.field');
field.addEventListener('click', (event) => {
  let cell = event.target.closest('.goblin');
    if (fail === 5) {
      clearInterval(timer);
      alert ('Игра закончена. Вы проиграли');
      return;
    }
    if (!cell) {
      fail += 1;
      failEl.textContent = fail;
      return;
    }
    win += 1;
    winEl.textContent = win;
});
