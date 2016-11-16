var TopDownGame = TopDownGame || {};
TopDownGame.MainMenu = function() {};

TopDownGame.MainMenu.prototype = {
    
    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "MainMenuBG");
        this.splash.scale.setTo(0.5);
        this.splash.anchor.setTo(0.5);
        
    },
    
    // this is probably helpful for adding text but i dunno ????? https://phaser.io/examples/v2/text/center-text-on-sprite
    
    
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            this.state.start("Game");
        }
    }
};