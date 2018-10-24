import phaser from 'phaser'
import io from 'socket.io-client'
var socket = io();

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: 0 }
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
   
  function preload() {
    this.load.image('player', 'assets/images/player.png');
  }
     
  function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.body.bounce.set(0.8);
    player.setCollideWorldBounds(true);
  }
   
  function update() {
    //player.body.setVelocityY(200); // jump up
    this.input.on('pointerdown', function (pointer) {

      var mousePos = new Phaser.Math.Vector2();
      var playerPos = new Phaser.Math.Vector2();
      var newPos = new Phaser.Math.Vector2();

      mousePos = pointer.position;
      playerPos = player.body.position;
      var newPosX = mousePos.x - playerPos.x;
      var newPosY = mousePos.y - playerPos.y;
      newPos.x = newPosX;
      newPos.y = newPosY;
      newPos.normalize();

      player.body.setVelocityY(newPos.y * -1 * 1000);
      player.body.setVelocityX(newPos.x * -1 * 1000);
    }, this);
  }