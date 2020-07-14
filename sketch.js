const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var log1,log2,log3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	all = createSprite (200,200);

var options = {
isStatic = false,
restitution: 0.3,
friction: 0.5,
density: 1.2,

}
ball = bodies.rectangle(100,200,30,30,options);
	engine = Engine.create();
	world = engine.world;
ground = createSprite(795,400,800,10)
	//Create the Bodies Here.

	Engine.run(engine);
  
}
// why wont it show anything??????????
 
function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
}
