import Phaser from 'phaser';
import platform from '../assets/platform.png';
import player from '../assets/player.png';
import coin from '../assets/coin.png';
import mountain from '../assets/mountain.png';
import fire from '../assets/fire.png';

class PreloadGame extends Phaser.Scene {
  constructor() {
    super({ key: 'preloadGame' });
  }

  preload() {
    this.load.image('platform', platform);

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet('player', player, {
      frameWidth: 24,
      frameHeight: 48,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet('coin', coin, {
      frameWidth: 20,
      frameHeight: 20,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', fire, {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet('mountain', mountain, {
      frameWidth: 512,
      frameHeight: 512,
    });
  }

  create() {
    // setting player animation
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 1,
      }),
      frameRate: 8,
      repeat: -1,
    });

    // setting coin animation
    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: 'burn',
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.scene.start('PlayGame');
  }
}

export default PreloadGame;