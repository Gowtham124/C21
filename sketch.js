var fr,mr;
var o1;

function setup() {
  createCanvas(800,400);
  
  fr = createSprite(200,200,40,80);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(400,200,80,40);
  mr.shapeColor = "green";
  mr.debug = true;

  o1 = createSprite(200,300,50,80);
  o1.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

 if(collisionMaster(mr,fr)){
 mr.shapeColor = "yellow";
    fr.shapeColor = "yellow";

 }
 else if(collisionMaster(mr,o1)){
   mr.shapeColor = "yellow";
   o1.shapeColor = "yellow";
 }
else{
   mr.shapeColor = "green";
    fr.shapeColor = "green";

    o1.shapeColor = "green";
}

  drawSprites();
}

function collisionMaster(mr,fr){

 if(mr.x - fr.x < fr.width/2 + mr.width/2 
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2){
   return true
  }
  else{
   return false
  }
}