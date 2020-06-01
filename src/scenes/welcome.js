import Phaser from 'phaser';

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'welcome' });
  }

  create() {
    
    this.add.text(206, 206, 'Welcome to Endless Runner Game', { fontSize: '32px', fill: '#000' });
  }

  displayName(name) {
    const h1 = document.createElement('h3');
    h1.className = 'welName';
    h1.textContent = `Welcome to The Game ${name}`;
    const container = document.querySelector('.welcome');
    container.appendChild(h1);
  }
}
