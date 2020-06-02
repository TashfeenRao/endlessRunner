import gameOptions from '../constants/constants';
import Welcome from '../scenes/welcome';
import { getScores } from '../apiHandle/apiHandle';

const eventListner = (
  () => {
    let bool = false;
    const container = document.querySelector('.container');
    const frm = document.getElementById('form');
    const startBtn = document.getElementById('startBtn');
    const newGameBtn = document.createElement('button');
    const showScoresBtn = document.getElementById('showScores');
    const newGame = () => {
      newGameBtn.id = 'newGame';
      newGameBtn.textContent = 'New Game';
      container.appendChild(newGameBtn);
      newGameBtn.addEventListener('click', () => {
      });
    };
    const showScores = () => {
      getScores().then((data) => {
        console.log(data);
      });
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
      startBtn.addEventListener('click', startGame);
      const obj = new Welcome();
      obj.displayName(gameOptions.name);
    };
    const takeInput = () => {
      frm.addEventListener('submit', userName);
      showScoresBtn.addEventListener('click', showScores);
      return bool;
    };
    return {
      takeInput, startGame, bool, newGame,
    };
  })();

export default eventListner;