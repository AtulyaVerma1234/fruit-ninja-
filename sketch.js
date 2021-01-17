var sword;
var swordImg;

var gameState = PLAY;
var gameState = END;

var fruitGroup;
var monsterGroup;

var fruit;
var fruit1Img;
var fruit2Img;
var fruit3Img;
var fruit4Img;

var monster;
var monsterImg;

var score;

var gameOver;
var gameOverImg;

function preload(){
  
  swordImg = loadImage("sword.png");
  
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  
  gameOverImg = loadImage("gameover.png");
  
  monsterImg = loadImage("alien1.png");
  
  monsterGroup = createGroup();
  fruitGroup = createGroup();
  
  
  sword();
  
  score = 0;
}

function draw(){
  background("skyBlue");
  
  text("Score:" + score,330,20);
  
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
  if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score = score + 1;
  }
  if(sword.isTouching(monsterGroup)){
    gameOver();
    fruitGroup.setVelocityEach(0);
    monsterGroup.setVelocityEach(0);
  }
  
  fruits();
  enemy();
  
drawSprites();
}
function sword(){
  sword = createSprite(200,200,20,20);
  sword.addImage(swordImg);
  sword.scale = 0.6;
  
}
function fruits(){
  if(World.frameCount%60===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    r = Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1Img);
    } else if (r == 2){
      fruit.addImage(fruit2Img);
    } else if (r == 3){
      fruit.addImage(fruit3Img);
    } else if (r == 4){
      fruit.addImage(fruit4Img);
    }
    fruit.y = Math.round(random(50,340));
    fruit.velocityX = -7;
    fruit.lifetime = 50;
    fruitGroup.add(fruit);
  }
}
function enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImg);
  monster.y   = Math.round(random(100,300));
  monster.velocityX = -8;
  monster.setLifetime = 50;
  monsterGroup.add(monster);
  }
  
}
function gameOver(){
  gamesOver = createSprite(200,200,20,20);
  gamesOver.addImage(gameOverImg);
}