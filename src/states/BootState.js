export default class BootState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        this.game.load.image('bullet', 'assets/sprites/shmup-bullet.png');
        this.game.load.image('ship', 'assets/sprites/thrust_ship.png');
    }

    create() {
        this.game.state.start('game');
    }
}
