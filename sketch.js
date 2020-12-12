// namespaces nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1;
var box2;
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
world = engine.world;
box1 = new Box(100,200,50,50);
box2 = new Box(140,100,50,70);
ground = new Ground(200,height,400,20)
}

function draw() {
  Engine.update(engine);
  background(0);
  box1.display();
  box2.display();
  ground.display();
  }

