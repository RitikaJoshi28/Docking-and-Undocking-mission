var iss,iss_iss;

var spaceCraft,spaceCraft_spaceCraft,spaceC,spaceCra,spaceCraft1;

var hasDocked=false;
var scene,scenery;

function preload()
{
  iss_iss=loadImage("iss.png");
  spaceCraft_spaceCraft=loadImage("spacecraft1.png");
  spaceC=loadImage("spacecraft3");
  spaceCra=loadImage("spaceraft4");
  spaceCraft1=loadImage("spacecarft2.png");
    
  
  scenery=loadImage("spacebg.jpg");
 
}

function setup() {
  createCanvas(800,400);
   iss=createSprite(400, 200, 50, 50);
  iss.addImage("iss",iss_iss);
  iss.scale=0.1;

   spaceCraft=createSprite(400,95,50,50);
   spaceCraft.addImage("spaceCraft",spaceCraft_spaceCraft,spaceC,spaceCraft1,spaceCra);
   scene=createSprite(800,400,20,20);
   scene.addImage("space",scenery);
 
   
   
}

function draw() {
  background(255,255,255); 
  if(!hasDocked)
  {
    //write code to set random x position for spaceCraft
    if(keyDown(LEFT_ARROW))
    {
       spaceCraft.addImage("spacec",spaceC);
       spaceCraft.velocityX=-3;
    }
    if(keyDown(RIGHT_ARROW))
    {
      spaceCraft.addImage("spacecraft",spaceCra);
       spaceCraft.velocityX=-3;
    }
    if(keyDown(UP_ARROW))
    {
      spaceCraft.velocityY=-2;
       spaceCraft.collide(iss);
    }
    if(keyDown(DOWN_ARROW))
    {
      spaceCraft.addImage("spacecra",spaceC,spaceCra);
    }
    if(spaceCraft.isTouching(iss))
    {
      textSize(25);
      text("Docking Successful",800,300);
    }
  } 
  drawSprites();
}