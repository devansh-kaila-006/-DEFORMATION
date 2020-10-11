 var c1,c2,c3,c4;
 var w1,w2,w3,w4,w5,w6,wall,wall2,wall3,wall4;
 var d1,d2,d3;
 var speed,speed1,speed2,speed3;
 var weight,weight1,weight2,weight3;
 var deformation,deformation1,deformation2,deformation3;
 
 function setup() {
  createCanvas(1100,500);
  
  c1 = createSprite(45,140,50,30);
  c2 = createSprite(45,240,50,30);
  c3 = createSprite(45,340,50,30);
  c4 = createSprite(45,440,50,30);

  w1 = createSprite(535,10,1100,20);
  w2 = createSprite(535,90,1100,20);
  w3 = createSprite(535,190,1100,20);
  w4 = createSprite(535,290,1100,20);
  w5 = createSprite(535,390,1100,20);
  w6 = createSprite(535,490,1100,20);
  wall = createSprite(1080,height/2,40,height);
  wall2 = createSprite(20,50,40,60);
  wall3 = createSprite(350,50,20,60);
  wall4 = createSprite(750,50,20,60);
  
  d1 = createSprite(100,50,70,20);
  d2 = createSprite(410,50,70,20);
  d3 = createSprite(810,50,70,20);
  
  speed = random(55,90);
  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);

  weight = random(400,1500);
  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);
 
}

function draw() {
  background(80,80,80); 

  c1.shapeColor="white";
  c2.shapeColor="white";
  c3.shapeColor="white";
  c4.shapeColor="white";

  w1.shapeColor="black"; 
  w2.shapeColor="black";
  w3.shapeColor="black"; 
  w4.shapeColor="black";
  w5.shapeColor="black";
  w6.shapeColor="black";
  wall.shapeColor="black";
  wall2.shapeColor="black";
  wall3.shapeColor="black";
  wall4.shapeColor="black";

  d1.shapeColor="red";
  d2.shapeColor="yellow";
  d3.shapeColor="green";

  c1.velocityX=speed;
  c2.velocityX=speed;
  c3.velocityX=speed;
  c4.velocityX=speed; 

  c1.collide(wall);
  c2.collide(wall);
  c3.collide(wall);
  c4.collide(wall);

  if(c1.collide(wall)){
    c1.velocityX=0;
  }
  if(c2.collide(wall)){
    c2.velocityX=0;
  }
  if(c3.collide(wall)){
    c3.velocityX=0;
  }
  if(c4.collide(wall)){
    c4.velocityX=0;
  }

if(wall.x - c1.x < c1.width + wall.width){
  
  deformation = 0.5 * weight * speed * speed / 22500;

  if(deformation < 100){
    c1.shapeColor=color(255,0,0);
  }
  if(deformation < 180 && deformation > 100){
    c1.shapeColor=color(230,230,0);
  }
  if(deformation > 180){
    c1.shapeColor=color(0,255,0);
  }
}

if(wall.x - c2.x < c2.width + wall.width){
  
  deformation1 = 0.5 * weight1 * speed1 * speed1 / 22500;

  if(deformation1 < 100){
    c2.shapeColor=color(255,0,0);
  }
  if(deformation1 < 180 && deformation1 > 100){
    c2.shapeColor=color(230,230,0);
  }
  if(deformation1 > 180){
    c2.shapeColor=color(0,255,0);
  }
}

if(wall.x - c3.x < c3.width + wall.width){
  
  deformation2 = 0.5 * weight2 * speed2 * speed2 / 22500;

  if(deformation2 < 100){
    c3.shapeColor=color(255,0,0);
  }
  if(deformation2 < 180 && deformation2 > 100){
    c3.shapeColor=color(230,230,0);
  }
  if(deformation2 > 180){
    c3.shapeColor=color(0,255,0);
  }
}

if(wall.x - c4.x < c4.width + wall.width){
  
  deformation3 = 0.5 * weight3 * speed3 * speed3 / 22500;

  if(deformation3 < 100){
    c4.shapeColor=color(255,0,0);
  }
  if(deformation3 < 180 && deformation3 > 100){
    c4.shapeColor=color(230,230,0);
  }
  if(deformation3 > 180){
    c4.shapeColor=color(0,255,0);
  }
}

  drawSprites();

  textStyle("BOLD");
  textFont("Georgia");
  textSize(30);
  fill("black");
  text("LETHAL",170,60);
  text("AVERAGE",500,60);
  text("GOOD",890,60);
 
}