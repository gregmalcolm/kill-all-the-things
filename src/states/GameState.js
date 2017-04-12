import Player from '../objects/Player/Player';
import WingMan from '../objects/Enemies/WingMan';

export default class GameState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
    }

    create() {
        this.player = new Player(this.game, 400, 300);
        this.enemy = new WingMan(this.game, 500, 200);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

    update() {
        this.player.respond(this.cursors, this.fireButton);
    }
}
