var TopDownGame = TopDownGame || {};
TopDownGame.MainMenu = function() {};

TopDownGame.MainMenu.prototype = {
    
    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "SUPERMODEL");

        this.splash.anchor.setTo(0.5);
        
    },
    
    //OK VVVVVVV IMPORTANT. these are like. goals that im trying to achieve for the main menu.  so i still dunno if its gonna be on a long screen or a wide screen, but either way, itll have a picture of the tree that we're using for the fighter, and then on top of it, a logo with the name "Supermodel fighting game" in huge block letters.  (i'm thinking sai?).  and if u click on the nose on the tree (itll be a huge obnoxious nose, like those groucho marx noses), theres an explosion and everything translates into chinese
    
    //REMINDER!!! u gotta also include code thatll let u switch the logo back to english :^) 
    
    // this is probably helpful for adding text but i dunno ????? https://phaser.io/examples/v2/text/center-text-on-sprite
    
    
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            this.state.start("Game");
        }
    }
};