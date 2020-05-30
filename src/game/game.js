/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
import Phaser from 'phaser';
import PreloadGame from '../scenes/preLoadGame';
import PlayGame from '../scenes/playGame';
import Welcome from '../scenes/welcome';
const gameConfig = {
  type: Phaser.AUTO,
  width: 834,
  height: 750,
  backgroundColor: 0x0c88c7,
  scene: [PreloadGame, PlayGame],
  // physics settings
  physics: {
    default: 'arcade',
  },
};

const wel = new Welcome();

const game = new Phaser.Game(gameConfig);
game.scene.add('welcome', wel);
export default game;