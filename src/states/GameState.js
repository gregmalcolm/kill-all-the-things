import Player from '../objects/Player/Player';

export default class GameState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
    }

    create() {
        this.player = new Player(this.game, 400, 300);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

    update() {
        this.player.respond(this.cursors, this.fireButton);
    }
}
