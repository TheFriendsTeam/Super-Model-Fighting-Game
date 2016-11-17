//var TopDownGame = TopDownGame || {};
//title screen
TopDownGame.Game = function () {};
TopDownGame.Game.prototype = {
    create: function () {
        //trigger for enemy movement.
        this.enemyMov = false;
        
        this.game.physics.arcade.gravity.y = 300;
        this.map = this.game.add.tilemap('map');
        
        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        this.map.addTilesetImage('tiles', 'gameTiles');
          
        
        this.backgroundlayer = this.map.createLayer('backgroundLayer');
        this.blockedLayer = this.map.createLayer('collideLayer');
      
        
        //resizes the game world to match the layer dimensions
        this.backgroundlayer.resizeWorld();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.map.setCollisionBetween(1,1000, true, 'collideLayer');
     
        var result = this.findObjectsByType('playerStart', this.map, 'player')
        this.player = this.game.add.sprite(result[0],result[1], 'player');


      
        //Im about to create an enemy!!!
        this.enemy = this.game.add.sprite(100,200, 'bride');


        this.game.physics.arcade.enable(this.player);
        this.player.body.velocity.y =0;

        //Im about to give enemy physics !!!
        this.game.physics.arcade.enable(this.enemy);
        this.enemy.enableBody = true;
    


       
        //the camera will follow the player in the world
        this.game.camera.follow(this.player);
        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    , createItems: function () {
        //create items
        this.items = this.game.add.group();
        this.items.enableBody = true;
        var item;
        result = this.findObjectsByType('item', this.map, 'objectsLayer');
        result.forEach(function (element) {
            this.createFromTiledObject(element, this.items);
        }, this);
    }
    , createDoors: function () {
        //create doors
        this.doors = this.game.add.group();
        this.doors.enableBody = true;
        result = this.findObjectsByType('door', this.map, 'objectsLayer');
        result.forEach(function (element) {
            this.createFromTiledObject(element, this.doors);
        }, this);
    }
    , //find objects in a Tiled layer that containt a property called "type" equal to a certain value
    findObjectsByType: function (type, map, layer) {
        var result = new Array();
        map.objects[layer].forEach(function (element) {
            if (element.properties.type === type) {
                //Phaser uses top left, Tiled bottom left so we have to adjust
                //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
                //so they might not be placed in the exact position as in Tiled
                element.y -= map.tileHeight;
                result.push(element);
            }
        });
        return result;
    }
    , //create a sprite from an object
    createFromTiledObject: function (element, group) {
        var sprite = group.create(element.x, element.y, element.properties.sprite);
        //copy all properties to the sprite
        Object.keys(element.properties).forEach(function (key) {
            sprite[key] = element.properties[key];
        });
    }
    , update: function () {
        //collision
         this.player.body.velocity.x = 0;
        
        
        this.player.body.gravity.y = 200; 
        this.game.physics.arcade.collide(this.player,this.blockedLayer );
        this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
        this.game.physics.arcade.overlap(this.player, this.doors, this.enterDoor, null, this);

        
        //player movement
        
        if (this.cursors.up.isDown) {
            if (this.player.body.velocity.y == 0) this.player.body.velocity.y = -100;
        }
        else if (this.cursors.down.isDown) {
            if (this.player.body.velocity.y == 0) this.player.body.velocity.y = 50;
        }
        else {
            //xhis.player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -100;
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 100;
        }

        //Enemy movement back and forth
        if(this.enemyMov === false){
            this.moveRight(this.enemy);
            if(this.enemy.body.x < 10){
              this.enemyMov = true;
            }
        }else{
            this.moveLeft(this.enemy,this.enemyMov);
            if(this.enemy.body.x > 100){
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
    
, };