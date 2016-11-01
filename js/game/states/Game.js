//name of object 
Template.Game = function () {};

//object prototype i.e. what contains all object info
Template.Game.prototype = {
    
    create: function() {
        this.game.stage.backgroundColor = "fff";
         // This function is called after the 'preload' function 
        // Here we set up the game, display sprites, etc.
        
        // enable keyboard
        this.keyboard = this.game.input.keyboard.createCursorKeys();
        
        // change background color.
        this.game.stage.backgroundColor = '#3498db'
        
        //adding sprites
        this.player = this.game.add.sprite(100, 300, 'peach');
    }
};