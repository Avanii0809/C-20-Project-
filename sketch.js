var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  console.log(speed);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000, 200, 60, height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = color(80,80,80);
  deformation();
  drawSprites();
}

function deformation() {
  var deform;
  if (wall.x-car.x<(wall.width+car.width)/2) {

    car.velocityX = 0;

    deform = 0.5*speed*speed*weight/22500;
    
    if (deform<=100) {
      car.shapeColor = "green";
    }
    
    if (deform>100 && deform<180) {
      car.shapeColor = color(230,230,0);
    }

    if (deform>180) {
      car.shapeColor = color(255,0,0);
    }
 }
}