//var TopDownGame = TopDownGame || {};
//title screen
/* To Carrie: I the error was that when you added a tileset, the size the individual tile was
   not a multple of the Image size.

   Next time, When you add a tileset, make sure to check the size of the image you are going to get tiles
   from and adjust the tile size to an even multiple of the size.

   for example if the image you are using is 1024 pixels wide and 1024 pixel high, then you tile size needs
   to be a even multiple of 1024 meaning each tile can have a valid size of 2 pixels wide and 2 pixels high or
   any other even number.

*/
TopDownGame.Game = function () {};
TopDownGame.Game.prototype = {
    create: function () {
        //trigger for enemy movement.
        this.enemyMov = false;

        this.enemy1Mov = false;

        this.game.physics.arcade.gravity.y = 300;
        this.map = this.game.add.tilemap('map');
        
        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        this.map.addTilesetImage('tiles', 'gameTiles');

        this.map.addTilesetImage('castle_tileset_part1', 'castleTiles1');
        //this.map.addTilesetImage('castle_tileset_part2', 'castleTiles2');
        this.map.addTilesetImage('castle_tileset_part3', 'castleTiles3');
        //create layer
        //player
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.Forground = this.map.createLayer('Forground');
        this.collideLayer = this.map.createLayer('collideLayer')
            //collision on blockedLayer
            //resizes the game world to match the layer dimensions
            //this.backgroundlayer.resizeWorld();
        this.Forground.resizeWorld();
        this.collideLayer.resizeWorld();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.map.setCollisionBetween(1, 1000, true, 'collideLayer');
        //this.map.setCollision("")
        //this.createItems();
        //this.createDoors();
        //create player

        
        this.player = this.game.add.sprite(0,1, 'sprite');
      
       // this.player.frame = 0;
        this.player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 10);
        this.player.animations.add('right', [7, 6, 5, 4, 3, 2, 1, 0], 10);
        
        this.player.scale.setTo(.4);
        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.y =0;
        this.player.body.collideWorldBounds=true;

        
        //Im about to create an enemy!!!
        this.enemy = this.game.add.sprite(100, 200, 'bride');
        this.enemy1 = this.game.add.sprite(175, 150, 'kid');
        this.enemy1.scale.setTo(.07);
        this.enemy.health = 200;
        this.enemy1.health = 50;
        //Im about to give enemy physics !!!
        this.game.physics.arcade.enable(this.enemy);
        this.enemy.enableBody = true;
        this.game.physics.arcade.enable(this.enemy1);
        this.enemy1.enableBody = true;

        //the camera will follow the player in the world
        this.game.camera.follow(this.player);
        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    , update: function () {
        //collision
        this.player.animations.play(); 


        this.player.body.velocity.x = 0;
        if (this.game.physics.arcade.overlap(this.player, this.enemy)) {
            this.enemy.health = this.enemy.health - 1;
        }
        if (this.game.physics.arcade.overlap(this.player, this.enemy1)) {
            //this.enemy1.kill();
            this.enemy1.health = this.enemy1.health - 1;
            console.log("attacking enemy");
            console.log(this.enemy1.health);
        }
        if (this.enemy1.health <= 0) {
            this.enemy1.kill();
        }
        if (this.enemy1.health <= 0) {
            this.enemy1.kill();
        }
        if (this.enemy.health <= 0) {
            this.enemy.kill();
        }
        this.player.body.gravity.y = 200;
        this.game.physics.arcade.collide(this.player, this.collideLayer);


        //player movement
        if (this.cursors.up.isDown) {
            if (this.player.body.velocity.y == 0) this.player.body.velocity.y = -250;
        }
        else if (this.cursors.down.isDown) {
            if (this.player.body.velocity.y == 0) this.player.body.velocity.y = 50;
        }
        else {
            //xhis.player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown) {
            this.player.animations.play('left');
            this.player.body.velocity.x = -100;
        }
        else if (this.cursors.right.isDown) {
            this.player.animations.play('left');
            this.player.body.velocity.x = 100;
        }

        //Enemy movement back and forth
        if (this.enemyMov === false) {
            this.moveRight(this.enemy);
            if (this.enemy.body.x < 10) {
                this.enemyMov = true;
            }
        }
        else {
            this.moveLeft(this.enemy, this.enemyMov);
            if (this.enemy.body.x > 100) {
                this.enemyMov = false;
            }
        }
    }
    , moveRight: function (enemy) {
        enemy.body.velocity.x = -40;
    }
    , moveLeft: function (enemy) {
        enemy.body.velocity.x = 30;
    }

};

