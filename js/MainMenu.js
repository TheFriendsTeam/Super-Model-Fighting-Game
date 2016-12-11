var TopDownGame = TopDownGame || {};
TopDownGame.MainMenu = function () {};
TopDownGame.MainMenu.prototype = {
    create: function () {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "SUPERMODEL");
        this.splash.anchor.setTo(0.5);
        var clic = this.game.add.button(this.game.world.centerX, this.game.world.centerY, "tras", this.actionOnClick, this, 2, 1, 0);
        clic.x = 112;
        clic.y = 242;
        var nose = this.add.button(this.game.world.centerX, this.game.world.centerY, "trans", this.onClickAction, this, 2, 1, 0);
        nose.x = 406;
        nose.y = 270;
        
        this.switchImage = false;
    }
    , update: function () {
        if (this.game.input.activePointer.justPressed()) {
            
        }
    }
    , actionOnClick: function () {
        console.log("pressing button");
        this.state.start("Game");
    }
    
    , onClickAction: function () {
        console.log("switching language");
        
        if(this.switchImage === false){
            this.switchImage =! this.switchImage;
            this.splash.loadTexture("chaomo", 0);
        }else{
            this.switchImage =! this.switchImage;
            this.splash.loadTexture("SUPERMODEL", 0);
        }
    }
};