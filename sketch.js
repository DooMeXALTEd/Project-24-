
var paper;
var box1,box2,box3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




  paper = new Paper(100,300,20);

box1 = new Box(900,300,30,100);
box2 = new Box(1000,300,30,100);
box3 = new Box(950,360,130,20);

ground = new Ground(600,380,1200,20);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  paper.display();
 box1.display();
 box2.display();
 box3.display();
 ground.display();

 
}




