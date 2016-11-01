Template.Preload = function() {
    this.ready=false;

};

Template.Preload.prototype = {
    
    preload: function() {
        this.preloadbar = this.add.sprite(this.game.world.centerX, this.game.world.centerY+ 128, "preloadBar");
        console.log("preloadbar is : " + this.preloadbar);
        this.preloadbar.anchor.setTo(0.5);
        
        this.load.setPreloadSprite(this.preloadbar);
        
        // here you load all the game images and what not
        

        this.load.image('peach', "assests/images/peach.gif");
         this.load.image("logo", "assests/images/logo-fb.png");
        
        
    },
    create: function() {
        console.log("preload bar is: "+this.preloadbar);
        this.preloadbar.cropEnabled = true;   
    },
    
    update: function() {
        console.log("about to go to to main menu")
       this.state.start('MainMenu');
    },
    
    onLoadComplete: function(){
        this.ready = true;
    }
};