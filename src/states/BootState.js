export default class BootState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        game.load.image('bullet', 'assets/sprites/shmup-bullet.png');
        game.load.image('ship', 'assets/sprites/thrust_ship.png');
    }

    create() {
    }
}
