/* eslint-disable no-lone-blocks */
/* eslint-disable no-alert */
import gameOptions from '../constants/constants';
import Welcome from '../scenes/welcome';
import { getScores } from '../apiHandle/apiHandle';
import dom from '../scenes/dom';

const eventListner = (
  () => {
    let bool = false;
    const container = document.querySelector('.container');
    const frm = document.getElementById('form');
    const startBtn = document.getElementById('startBtn');
    const newGameBtn = document.createElement('button');
    const RestartBtn = document.createElement('button');
    const showScoresBtn = document.getElementById('showScores');
    const newGame = () => {
      newGameBtn.id = 'newGame';
      newGameBtn.textContent = 'New Game';
      container.appendChild(newGameBtn);
    };
    const showScores = () => {
      dom.clearInput();
      getScores().then((data) => {
        dom.displayScore(data);
      }).catch((error) => {
        {
          alert(error);
        }
      });
    };
    const startGame = () => {
      bool = true;
      RestartBtn.id = 'restartBtn';
      RestartBtn.textContent = 'Restart';
      container.appendChild(RestartBtn);
      startBtn.style.display = 'none';
      newGame();
    };
    const userName = (e) => {
      e.preventDefault();
      const name = document.getElementById('input');
      gameOptions.name = name.value;
      name.value = '';
      frm.style.display = 'none';
      const wel = document.querySelector('.welcome');
      wel.style.display = 'block';
      const h3 = document.getElementById('h3');
      h3.innerHTML = '';
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