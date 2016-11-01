// We create our only state
var mainState = {
    // Here we add all the functions we need for our state
    // For this project we will just have 3
    preload: function () {
        // This function will be executed at the beginning
        // That's where we load the game's assets
        // Load the image
        game.load.image('peach', 'peach.gif');
        
        
        game.load.image('coin', 'coin.png')
    }
    , create: function () {
        // This function is called after the 'preload' function 
        // Here we set up the game, display sprites, etc.
        
        // enable keyboard
        this.keyboard = game.input.keyboard.createCursorKeys();
        
        // change background color.
        game.stage.backgroundColor = '#3498db'
        
        //adding sprites
        this.player = game.add.sprite(100, 300, 'peach');
    
        this.coins = game.add.group();
        
        // Change size of sprites
        this.player.scale.setTo(.1, .1);
        
        // Enable physics on sprites
        game.physics.arcade.enable(this.player);
       
        //  Player physics properties.
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;
        
        
        //adding coin properties
        this.coins.enableBody = true;
        this.coins.createMultiple(10, 'coin');
       
        game.time.events.loop(220, this.addCoins, this);
    }
    , update: function () {
        // This contains Game Logic
        this.player.body.velocity.x = 0;
        // if I press the right key, player moves right
        if (this.keyboard.right.isDown) {
            this.player.body.velocity.x = 300;
        }
        //if pressing left key, player moves left
        if (this.keyboard.left.isDown) {
            this.player.body.velocity.x = -300;
        }
        if (this.keyboard.up.isDown) {
            this.player.body.velocity.y = -300;
        }
        game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
    }
    , takeCoin: function (player, coin) {
        // Kill the coin to make it disappear from the game
        coin.kill();
    }
    , addCoins: function () {
        // Get the first dead coin of the group 
        var coin = this.coins.getFirstDead();
        // If there isn't any dead coin, do nothing
        if (!coin) {
            return;
        }
        // Initialize the coin
        coin.scale.setTo(.2,.2);
        coin.anchor.setTo(0.5, 1);
        coin.reset( game.rnd.pick([game.width/2,0 ]),0);
        coin.body.gravity.y = 500;
        coin.body.velocity.x = 100 * game.rnd.pick([-2, 2]);
        coin.body.bounce.x = 1;
        coin.checkWorldBounds = true;
        coin.outOfBoundsKill = true;
    }
};
// We initialize Phaser
var game = new Phaser.Game(800, 800, Phaser.AUTO, 'body');
// And we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');