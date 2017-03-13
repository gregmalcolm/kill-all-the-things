import Player from '../objects/Player/Player';

export default class GameState extends Phaser.State {
    constructor() {
        super();

        this.player = null;
        this.background = null;
    }

    preload() {
    }

    create() {
        this.background = new Phaser.Image(this.game, 0, 0, 'bg_1');
        this.game.add.existing(this.background);

        this.player = new Player(this.game, 100, 100);
    }

    update() {
        let cursors = this.input.keyboard.createCursorKeys();
        this.player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            this.player.body.velocity.x = -150;
        } else if (cursors.right.isDown) {
            this.player.body.velocity.x = 150;
        }
    }
}
