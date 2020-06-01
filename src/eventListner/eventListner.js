import gameOptions from '../constants/constants';
import Welcome from '../scenes/welcome';

const eventListner = (
  () => {
    let bool = false;
    const frm = document.getElementById('form');
    const startGame = () => {
      bool = true;
    };
    const userName = (e) => {
      e.preventDefault();
      const name = document.getElementById('input');
      gameOptions.name = name.value;
      name.value = '';
      frm.style.display = 'none';
      const obj = new Welcome();
      obj.displayName(gameOptions.name);
      const startBtn = document.getElementById('startBtn');
      startBtn.addEventListener('click', startGame);
    };
    const takeInput = () => {
      frm.addEventListener('submit', userName);
      return bool;
    };
    return { bool, takeInput };
  })();

export default eventListner;