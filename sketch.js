var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var c1,c2,c3,c4,track,bg;
var form, player, game;
var mysound

var cars, car1, car2, car3, car4;

function preload(){
  track=loadImage("../images/track.jpg");
  c1=loadImage("../images/car1.png");
  c2=loadImage("../images/car2.png");
  c3=loadImage("../images/car3.png");
  c4=loadImage("../images/car4.png");
 
  bg=loadImage("../images/ground.png");

  mysound=loadSound("../images/soundTrack.mp3");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    //mysound.play();
    game.play();
  }
  if(gameState===2){
    //game.update(2);
    game.end();
  }
}
