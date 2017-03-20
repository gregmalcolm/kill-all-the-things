import Player from '../objects/Player/Player';

export default class GameState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
    }

    create() {
        this.player = new Player(this.game, 400, 300);
    }
}
