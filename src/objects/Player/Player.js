export default class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'ship');
        this.anchor.set(0.5);

        game.physics.arcade.enable(this);
        game.add.existing(this);

        this.body.drag.set(70);
        this.body.maxVelocity.set(200);

        this.weapon = this._addWeapon(game);
    }

    respond(cursors, fireButton) {
        this._handleInput(cursors, fireButton);

        this.game.world.wrap(this, 16);
    }

    render() {
        this.weapon.debug();
    }

    _handleInput(cursors, fireButton) {
        if (cursors.up.isDown) {
            this.game.physics.arcade.accelerationFromRotation(
                this.rotation, 300, this.body.acceleration);
        } else {
            this.body.acceleration.set(0);
        }

        if (cursors.left.isDown) {
            this.body.angularVelocity = -300;
        } else if (cursors.right.isDown) {
            this.body.angularVelocity = 300;
        } else {
            this.body.angularVelocity = 0;
        }

        if (fireButton.isDown) {
            this.weapon.fire();
        }
    }


    _addWeapon(game) {
        //  Creates 30 bullets, using the 'bullet' graphic
        let weapon = game.add.weapon(30, 'bullet');

        //  The bullet will be automatically killed when it leaves the world bounds
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        weapon.bulletSpeed = 600;

        //  Speed-up the rate of fire, allowing them to shoot 1
        //  bullet every 60ms
        weapon.fireRate = 100;

        //  Tell the Weapon to track the 'player' Sprite
        //  With no offsets from the position
        //  But the 'true' argument tells the weapon to track
        //  sprite rotation
        weapon.trackSprite(this, 0, 0, true);

        return weapon;
    }

}
