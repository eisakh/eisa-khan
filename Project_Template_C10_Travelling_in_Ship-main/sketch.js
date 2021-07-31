var sea,ship

var seaImg ,shipImg



function preload(){
seaImg=loadImage("sea.png")

shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png" )






}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200)
 sea.addImage(seaImg)
 sea.scale=0.5 
 sea.velocityX=-2


 ship=createSprite(330,260)
 ship.addAnimation(shipImg)
 ship.scale=0.7
 



}

function draw() {
  background("0");
 drawSprites();

 if(sea.x < 0){
  sea.x=sea.width/2
   }
  



}