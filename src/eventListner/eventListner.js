import gameOptions from '../constants/constants';

const eventListner = () => {
  const userName = (e) => {
    e.preventDefault();
    const name = document.getElementById('input');
    gameOptions.name = name.value;
    name.value = '';
  };
  const frm = document.querySelector('form');
  frm.addEventListener('submit', userName);
};

export default eventListner;