import "phaser";
import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
    
const config: GameConfig = {
    type: Phaser.AUTO,
    parent: "canvas",
    width: 960,
    height: 540,
    scene: [
        Preloader,
        Main
    ]
};

const game = new Phaser.Game(config);