export default class GameState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
    }

    create() {
        //this.player = new Player(this.game, 400, 300);
        let sprite = this.add.sprite(400, 300, 'ship');

        sprite.anchor.set(0.5);
    }
}
