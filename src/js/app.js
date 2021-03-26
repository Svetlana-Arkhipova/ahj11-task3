import handlerFactory from './handler';
import setGoblin from './setgoblin';

setGoblin();
const timer = setInterval(() => {
  document.querySelector('.goblin').classList.remove('goblin');
  setGoblin();
}, 1000);

const field = document.querySelector('.field');
field.addEventListener('click', handlerFactory(timer));
