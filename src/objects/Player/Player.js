export default class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'player_purple');

        game.physics.arcade.enable(this);
        //this.body.gravity.y = 900;
        game.add.existing(this);

        // Using our Player class from earlier
        this.jumpFrame = 4;
        // anim name, array of frames, FPS, loops
        this.animations.add('idle', [0, 1], 5, true);
        this.animations.add('walk', [2, 3], 10, true);

        this.animations.play('idle');
        // OR, for single frames
        //this.frame = this.jumpFrame;
        //
        this.anchor.setTo(.5, .5);
        this.leftDir = this.scale.x * -1;
        this.rightDir = this.scale.x;
    }

    static loadPlayerImage(game) {
        game.load.spritesheet('player_purple', 'assets/Player/player_brown.png', 150, 207);
    }

    updatePlayer(cursors, contacts) {
        //this._handleInput(cursors, contacts);
    }

    _handleInput(cursors, contacts) {
    }
}
