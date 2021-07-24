import handlerFactory from './handler';
import setGoblin from './setgoblin';
import checkGameOver from './check-game-over';
import State from './state';
import updateScore from './update-score-ui';

const state = new State();
updateScore(state);
setGoblin();

const timer = setInterval(() => state.nextRound(), 1000);

state.onNextRound(checkGameOver(timer));
state.onNextRound(updateScore);
state.onNextRound(setGoblin);

// слушаем клики
const field = document.querySelector('.field');
field.addEventListener('click', handlerFactory(state));
