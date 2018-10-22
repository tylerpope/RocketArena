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
        debug: false,
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
   
  function preload() {
  }
     
  function create() {
  }
   
  function update() {}