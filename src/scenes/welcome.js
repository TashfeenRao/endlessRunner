/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import { elements } from './domElements';

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'welcome' });
  }

  create() {
    this.add.text(206, 206, 'Welcome to Endless Runner Game', { fontSize: '32px', fill: '#000' });
  }

  displayName(name) {
    elements.h3.textContent = `Welcome to The Game ${name}`;
    elements.welcome.appendChild(elements.h3);
  }
}
