import Phaser from 'phaser';

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'welcome' });
  }

  create() {
    const div = document.createElement('div');
    div.className = 'form';
    div.innerHTML = `<button>New Game</button>
        <button>Start Game</button>`;
    const container = document.querySelector('.container');
    container.appendChild(div);
  }
}
