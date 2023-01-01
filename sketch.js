var runner,runnerimg
var obstacle,obstacleimg
var cloud,cloudimg
var ground,groundimg
function preload(){
runnerimg=loadAnimation("runner.png","runner1.png","runner.png","runner1.png")
groundimg=loadImage("track1.jpg")
//obstacleimg=loadImage()

}
 function setup() {
createCanvas(600,600)
runner=createSprite(100,400,20,50)
runner.addAnimation("runner",runnerimg)
runner.scale=0.05
ground=createSprite(600,600);
ground.addImage(groundimg);
ground.velocityX = -5;
//ground.scale=0.3;
 }
function draw(){

background("black")
drawSprites()
if(ground.x < 0){
    ground.x = ground.width/8;
}

}
