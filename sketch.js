var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud_group, obstacles_group
var cloud_image
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloud_image = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloud_group= new Group();
  obstacles_group=new Group();

}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnclouds();
  spawnobstacles();
  drawSprites();
}

function spawnclouds(){
 if(frameCount % 60===0){
 var clouds = createSprite(600,120,40,10);
 clouds.y= Math.round(random(80,120))
 clouds.addImage(cloud_image);
 clouds.scale=0.5;  
 clouds.velocityX=-3;
    
 clouds.lifetime=200;
    
 cloud_group.add(clouds);
  }
}

function spawnobstacles(){
  if(frameCount % 60===0){
  var obstacles = createSprite(600,160,10,40);
  obstacles.scale=0.5;
  obstacles.velocityX=-3;
  var r = Math.round(random(1,6))
  switch(r){
  case 1 : obstacles.addImage(obstacle1);
  break;
  case 2 : obstacles.addImage(obstacle2);
  break; 
  case 3 : obstacles.addImage(obstacle3);
  break;
  case 4 : obstacles.addImage(obstacle4);
  break;
  case 5 : obstacles.addImage(obstacle5);
  break;
  case 6 : obstacles.addImage(obstacle6);
  break;
  default: break;
  }
  
  obstacles.lifetime=200;
    
  obstacles_group.add(obstacles);
  }
}