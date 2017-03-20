import BootState from './states/BootState';
import GameState from './states/GameState';

class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.CANVAS, 'content');

        this.state.add('boot', new BootState());
        this.state.add('game', new GameState());

        this.state.start('boot');
    }
};

new Game();
