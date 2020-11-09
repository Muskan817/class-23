//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball;
var box1,ground1,box2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var obj = {
  isStatic:true
  }
 

box1 = new box (200,300,40,40);
ground1 = new ground (200,height-10,400,10);
box2 = new box (240,100,100,40);
}

function draw() {
  background(0); 
  Engine.update(engine);

box1.display();
box2.display();
ground1.display();
  drawSprites();
}