
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var dustbin1,dustbin2,dustbin3
var ground
var paper

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	dustbin1 = new Dustbin(250,180,40);
	dustbin2 = new Dustbin(280,210,40);
	dustbin3  = new Dustbin(380,100,60);
  ground = new Ground(400,380,400,50);
  paper = new Paper(230,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}



