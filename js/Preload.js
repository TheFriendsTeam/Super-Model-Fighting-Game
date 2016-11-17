var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    //this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    //this.preloadBar.anchor.setTo(0.5);

    //this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('map', 'assets/tilemaps/douglas.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/images/tiles.png');
    this.load.image('castleTiles1', 'assets/tilemaps/castle_tileset_part1.png');
    this.load.image('castleTiles2', 'assets/tilemaps/castle_tileset_part2.png');
    this.load.image('castleTiles3', 'assets/tilemaps/castle_tileset_part3.png');
    //this.load.image('greencup', 'assets/images/greencup.png');
    //this.load.image('bluecup', 'assets/images/bluecup.png');
    this.load.image('player', 'assets/images/player.png');
    //this.load.image('browndoor', 'assets/images/browndoor.png');

  },
  create: function() {
    this.state.start('Game');
  }
};
