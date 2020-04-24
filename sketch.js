var car1,car1_weight,car1_speed,car1_deformation;
var wall;
var road;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(30,370,100,50);
  car1.shapeColor = "white";
  car1_weight = random(400,1500);
  car1_speed = random(30,95);
  wall = createSprite(900,200,60,400)
  wall.shapeColor = "grey";
  car1_deformation = (car1_speed*car1_weight*0.5)/22500;
  road = createSprite(800,395,1600,20)
  road.shapeColor = "black";
}

function draw() {
  background("blue");  
  car1.velocityX = 4

   if (isTouching(car1,wall) === true){
    car1.velocityX = 0;
    if (car1_deformation>=180){
      car1.shapeColor = "red";
    }
    if (car1_deformation<180 && car1_deformation>80){
      car1.shapeColor = "yellow";
    }
    if (car1_deformation<=80){
      car1.shapeColor ="green";
    }
    
  }
  drawSprites();
}
function isTouching(obj,obj2){
  if (obj.x - obj2.x < obj2.width/2 + obj.width/2
    && obj2.x - obj.x < obj2.width/2 + obj.width/2
      && obj.y - obj2.y < obj2.height/2 +obj.height/2
        && obj2.y - obj.y < obj2.height/2 + obj.height/2){
   return true;
        }
   else {
     return false;
   }
    
}

function bounceOff (obj,obj2){
  if (obj.x - obj2.x < obj2.width/2 + obj.width/2
      && obj2.x - obj.x < obj2.width/2 + obj.width/2){
          obj.velocityX = obj.velocityX*(-1);
          obj2.velocityX  =obj2.velocityX*(-1);
      }
      if( obj.y - obj2.y < obj2.height/2 +obj.height/2
          && obj2.y - obj.y < obj2.height/2 + obj.height/2){
          obj.velocityY = obj.velocityY*(-1);
          obj2.velocityY = obj2.velocityY*(-1);

      }

}