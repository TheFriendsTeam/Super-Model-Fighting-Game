var TopDownGame = TopDownGame || {};

TopDownGame.MainMenu = function() {};

TopDownGame.MainMenu.prototype = {
    
    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "SUPERMODEL");

        this.splash.anchor.setTo(0.5);
        
        var clic = this.add.button(this.game.world.centerX, this.game.world.centerY, "samp"//, actionOnClick, 
);
        clic.anchor.set(2.1, -0.46);
        
        var nose = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "sample");
        
        nose.x = 406;
        nose.y = 270;
    },
    
   
    update: function() {
        
    }
    ,update: function() {

        if(this.game.input.activePointer.justPressed()){
            this.state.start("Game");
        }
    }

};
    
