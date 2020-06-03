/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'welcome' });
  }

  create() {
    this.add.text(206, 206, 'Welcome to Endless Runner Game', { fontSize: '32px', fill: '#000' });
  }

  displayName(name) {
    const h3 = document.getElementById('h3');
    h3.textContent = `Welcome to The Game ${name}`;
    const container = document.querySelector('.welcome');
    container.appendChild(h3);
  }
}
