import gameOptions from '../constants/constants';
import Welcome from '../scenes/welcome';

const eventListner = (
  () => {
    let bool = false;
    const container = document.querySelector('.container');
    const frm = document.getElementById('form');
    const startBtn = document.getElementById('startBtn');
    const newGameBtn = document.createElement('button');
    const startGame = () => {
      bool = true;
      return bool;
      console.log('ksdkdksjdsjk');
      // startBtn.style.display = 'none';
      // newGameBtn.textContent = 'New Game';
      // container.appendChild(newGameBtn);
    };
    const userName = (e) => {
      e.preventDefault();
      const name = document.getElementById('input');
      gameOptions.name = name.value;
      name.value = '';
      frm.style.display = 'none';
      const obj = new Welcome();
      obj.displayName(gameOptions.name);
    };
    const takeInput = () => {
      frm.addEventListener('submit', userName);
      return bool;
    };
    const newGame = () => {

    };
    return { takeInput, startGame, bool };
  })();

export default eventListner;