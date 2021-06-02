const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,380,900,20);
  
 
  //level one
  block1 = new Block(400,350,30,40);
  console.log(block1);
  block2 = new Block(430,350,30,40);
  block3 = new Block(460,350,30,40);
  block4 = new Block(490,350,30,40);
  block5 = new Block(520,350,30,40);
  block6 = new Block(550,350,30,40);
  block7 = new Block(580,350,30,40);
  //level two
  block8 = new Block(430,330,30,40);
  block9 = new Block(460,330,30,40);
  block10 = new Block(490,330,30,40);
  block11 = new Block(520,330,30,40);
  block12 = new Block(550,330,30,40);
  //level three
  block13 = new Block(460,300,30,40);
  block14 = new Block(490,300,30,40);
  block15 = new Block(520,300,30,40);
  //top
  block16 = new Block(490,280,30,40);
 
  polygon = new Polygon(300,200,40,40)

 slingShot = new Slingshot(polygon.body,{x:300,y:100})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("yellow")
  polygon.display();
  slingShot.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function keyPressed()
{
     if(keyCode === 32)
     {
         slingShot.attach(polygon.body);
         
     }
}
