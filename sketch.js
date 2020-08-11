var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.lifetime=150;
  wall=createSprite(1500,200,60,height/2);
  wall.lifetime=150;


}

function draw() {
  background("white");  
  if(wall.x-car.x<(car.width+wall.x)/2)
{car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor="yellow";
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor="blue";
  }
  if(deformation<100)
  {
    car.shapeColor="green";
  }
}
  drawSprites();
}