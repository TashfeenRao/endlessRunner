import gameOptions from '../constants/constants';
import Welcome from '../scenes/welcome';
import game from '../game/game';

const eventListner = (
  () => {
    let bool = false;
    const container = document.querySelector('.container');
    const frm = document.getElementById('form');
    const startBtn = document.getElementById('startBtn');
    const newGameBtn = document.createElement('button');
    const newGame = () => {
      newGameBtn.id = 'newGame';
      newGameBtn.textContent = 'New Game';
      container.appendChild(newGameBtn);
      newGameBtn.addEventListener('click', () => {
        console.log('skdnksndksnndsknkskndsknkn')
      })
    };
    const startGame = () => {
      bool = true;
      startBtn.textContent = 'Restart';
      newGame();
    };
    const userName = (e) => {
      e.preventDefault();
      const name = document.getElementById('input');
      gameOptions.name = name.value;
      name.value = '';
      frm.style.display = 'none';
      const obj = new Welcome();
      startBtn.addEventListener('click', startGame);
      obj.displayName(gameOptions.name);
    };
    const takeInput = () => {
      frm.addEventListener('submit', userName);
      return bool;
    };
    return {
      takeInput, startGame, bool, newGame,
    };
  })();

export default eventListner;