import phaser from 'phaser'
import io from 'socket.io-client'
var socket = io();

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: 500 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
   
  var game = new Phaser.Game(config);
  var player;
  var cursors;
   
  function preload() {
    this.load.image('player', 'assets/images/player.png');
  }
     
  function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
  }
   
  function update() {
    if (cursors.up.isDown)
    {
        player.body.setVelocityY(-400); // jump up
    }
    if (cursors.left.isDown)
    {
        player.body.setVelocityX(-1500); // jump up
    }
    if (cursors.right.isDown)
    {
        player.body.setVelocityX(1500); // jump up
    }
  }