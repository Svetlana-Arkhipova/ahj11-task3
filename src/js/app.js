import handlerFactory from './handler';
import setGoblin from './setgoblin';

let fail = 0;
const failEl = document.querySelector('span.fail');

setGoblin();
const timer = setInterval(() => {
  document.querySelector('.goblin').classList.remove('goblin');
  setGoblin();
}, 1000);

const timer2 = setInterval(() => {
  fail += 1;
  failEl.textContent = fail;
  if (fail === 5) {
    clearInterval(timer);
    clearInterval(timer2);
    alert('Игра закончена. Вы проиграли');
  }
}, 1000);

const field = document.querySelector('.field');
field.addEventListener('click', handlerFactory(timer, timer2, fail, failEl));
