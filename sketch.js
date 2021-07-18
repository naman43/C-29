const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint

var engine, world;
var holder, ball, grounds;
var stand1, stand2;
var ball;
var slingshot;
var polygon_img;

function setup(){
  engine = Engine.create();
  world = engine.world;
  
  
  createCanvas(800,400);
  grounds = new Ground(400,580,1000,20);
  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);

  //set 1
  Block1 = new BLOCK(330,235,30,40);
  Block2 = new BLOCK(310,275,30,40);
  Block3 = new BLOCK(340,275,30,40);
  Block4 = new BLOCK(370,275,30,40);
  Block5 = new BLOCK(400,275,30,40);
  Block6 = new BLOCK(430,275,30,40);
  Block7 = new BLOCK(460,275,30,40);
  Block8 = new BLOCK(490,275,30,40);

  //set 2
  Block9 = new BLOCK(310,235,30,40);
  Block10 = new BLOCK(340,235,30,40);
  Block11 = new BLOCK(370,235,30,40);
  Block12 = new BLOCK(400,235,30,40);
  Block13 = new BLOCK(430,235,30,40);
  Block14 = new BLOCK(460,235,30,40);
  
  //set3
  Block15 = new BLOCK(340,195,30,40);
  Block16 = new BLOCK(370,195,30,40);
  Block17 = new BLOCK(400,195,30,40);
  Block18 = new BLOCK(430,195,30,40);
  
  //set4
  Block19 = new BLOCK(370,155,30,40);
  Block20 = new BLOCK(400,155,30,40);
  
  Block21 = new BLOCK(385,115,30,40);

  //set5
  blocks1 = new BLOCK(640,175,30,40);
  blocks2 = new BLOCK(670,175,30,40);
  blocks3 = new BLOCK(700,175,30,40);
  blocks4 = new BLOCK(730,175,30,40);
  blocks5 = new BLOCK(760,175,30,40);
  
  //set6
  blocks6 = new BLOCK(670,135,30,40);
  blocks7 = new BLOCK(700,135,30,40);
  blocks8 = new BLOCK(730,135,30,40);
  //7
  blocks9 = new BLOCK(700,95,30,40);

  ball = Bodies.circle(50,200,200);
  World.add(world,ball);

  slingshot = new SLINGSHOT(this.ball,{x:200,y:200});
}

function draw() {
  background(255,255,255);    
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black");  
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  
  stroke(15);
  fill("orange");
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  
  stroke(15);
  fill("violet");
  Block20.display();
  Block21.display();

  stroke(15);
  fill("red");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();  
  
  stroke(15);
  fill("yellow");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  stroke(15);
  fill("pink");
  blocks9.display();

  Text("Drag To Proceed!",600,250);

  elipse(ball.position.x, ball.position.y,20);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
} 