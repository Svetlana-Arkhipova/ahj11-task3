export default function checkGameOver(timer) {
  return (state) => {
    if (state.fail === 5) {
      clearInterval(timer);
      alert('Игра закончена.');
    }
  };
}
