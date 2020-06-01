import Phaser from 'phaser';

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'welcome' });
  }

  create() {
    const div = document.createElement('div');
    this.add.text(206, 206, 'Welcome to Endless Runner Game', { fontSize: '32px', fill: '#000' });
    div.className = 'form';
    div.innerHTML = ``;
    const container = document.querySelector('.container');
    container.appendChild(div);
  }
}
