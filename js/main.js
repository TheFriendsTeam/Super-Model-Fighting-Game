var TopDownGame = TopDownGame || {};


TopDownGame.game = new Phaser.Game(600, 400, Phaser.AUTO, '');

TopDownGame.game.state.add('Boot', TopDownGame.Boot);
TopDownGame.game.state.add('Preload', TopDownGame.Preload);
TopDownGame.game.state.add('Game', TopDownGame.Game);
TopDownGame.game.state.add('MainMenu', TopDownGame.MainMenu);

TopDownGame.game.state.start('Boot');

