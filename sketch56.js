var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  
  wall=createSprite(1500,200,60,height/2);
  


}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.x)/2)
{car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>100)
  {
    car.shapeColor="red";
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor="blue";
  }
  if(deformation<180)
  {
    scar.shapeColor="green";
  }
}
  drawSprites();
}