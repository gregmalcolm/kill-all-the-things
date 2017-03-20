export default class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'ship');
        this.anchor.set(0.5);

        game.physics.arcade.enable(this);
        game.add.existing(this);
    }

    updatePlayer(cursors, contacts) {
        //this._handleInput(cursors, contacts);
    }

    _handleInput(cursors, contacts) {
    }
}
