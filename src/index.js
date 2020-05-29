import './style.css';
import Phaser from 'phaser';
import gameOptions from './constants/constants';
import preloadGame from './scenes/preLoadGame';
import playGame from './scenes/playGame';
export let game = () => {
window.onload = function () {
  // object containing configuration options
  const gameConfig = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    scene: [preloadGame, playGame],
    backgroundColor: 0x0c88c7,

    // physics settings
    physics: {
      default: 'arcade',
    },
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resize();
  window.addEventListener('resize', resize, false);
};
}
game();
// preloadGame scene

// playGame scene
function resize() {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}
