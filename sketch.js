//Global Variables
var bananaImg,obstacleImg,obstaclesGroup,
    ground,score,player,playerImg,
    groundImg,playerGroup,banana,bananaGroup,ground1,grouna1Img;
 var PLAY = 1;
var END = 0;
var gameState = PLAY;
var index=0;
var x=0;
var y;
var gameover,gameoverImg;
var game;
var end;

var gameOver ,gameOverImg,restartImg,
 restart;
//var bananaGroup,obstaclesGroup;

var score=0;

function preload(){
 groundImg=loadImage("jungle.jpg");
  playerImg=loadAnimation("Monkey_03.png",
                       "Monkey_02.png",
                       "Monkey_01.png",
                       "Monkey_10.png",
                       "Monkey_08.png",
                       "Monkey_09.png",
                       "Monkey_07.png",
                       "Monkey_05.png",
                       "Monkey_06.png",
                       "Monkey_04.png");



  bananaImg=loadImage("Banana.png");
  obstacleImg=loadImage("stone.png");
  ground1Img=loadImage("ground.jpg");
  gameOverImg=loadImage("gameOver.png");
  restartImg=loadImage("restart.png");
 

}


function setup() {

  canvas = createCanvas(displayWidth-10,displayHeight-20);
  
  
  ground=createSprite(0,0,800,600);
  ground.addImage
  ("ground",groundImg);
 ground.velocityX=-8;
  ground.visible=true;
 
  
  
  player=createSprite(190,265,190,265);
  player.addAnimation("player",playerImg);
  player.scale=0.10;
  
 ground1 = createSprite(300,280,600,20);
//ground1.addAnimation("ground1",ground1Img);
ground1.x = ground1.width /2;
ground1.visible=false;
ground1.scale=1.20;
  

 gameOver = createSprite(200,300);
 restart = createSprite(200,340);
gameOver.addAnimation("gameOver",gameOverImg);
gameOver.scale = 0.5;
restart.addAnimation("restart",restartImg);
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;
  
  
   obstaclesGroup = new Group();
 bananaGroup = new Group();

}

function draw(){
 background(225); 
     if(gameState === PLAY){
 
  if(keyDown("space")) {
    player.velocityY = -10;
  }
  

player.velocityY= player.velocityY+0.8
  
  if (ground.x< 0){
  ground.x= ground.width/2;
  }
    player.collide(ground1);



  if(ground===player.ground)
{
  

  camera .position .x=displayWidth/2;
  camera . position .x=player.x;

}     


  switch(score){
    case 10: player.scale=0.12;
             break;
   case 20:  player.scale=0.14;
            break;
  case 30:  player.scale=0.16;
           break;
  case 40 : player.scale=0.18;
           break;
           default: break;
  }
   
  if(mousePressedOver(restart)) {
    reset();
  }
  
 
if(bananaGroup.isTouching(player)){
  bananaGroup.destroyEach();
  score=score+2;
}
if(obstaclesGroup.isTouching(player)){
    player.scale=0.2;
  }
 
 spawnfood();
  spawnObstacles();
 
 
     }
 else  if(gameState === END) {
 
  
    restart.visible = true;

   }


   if(score===10){
     gameState="End";

    gameOver.visible = true;
    player.velocityY = 0;
    ground.velocityX = 0;
    
  }

     
   drawSprites(); 
   
  
  
   
   stroke("white");

   
  fill("white");
  text("score:"+ score,430,50);
}
  
function spawnfood() {
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.addAnimation("Banana",bananaImg);
    banana.scale = 0.10;
     banana.y = random(120,200);
     banana.velocityX=-5;
      banana.lifetime = 134;
    bananaGroup.add(banana);
     player.depth = banana.depth;
    banana.depth = banana.depth + 1;
   
  }
}
function spawnObstacles() {
    if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(600,265,10,40);
     obstacle.velocityX = -6;
     obstaclesGroup.add(obstacle);
     var rand = random(1,6);
    obstacle.addAnimation("Stone",obstacleImg);
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
  
   
 
  }
}
 function reset(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
  obstaclesGroup.destroyEach();
 
  
}
 