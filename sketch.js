
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground1,box1,ball1;
var engine,world;

function setup() {
	createCanvas(1600, 700);

  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  box1=new Box(1200,650);
	ball1=new Ball(200,450,40);
  ground1=new Ground(width/2,670,width,20);
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});


  Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  ground1.display();
  box1.display();
  ball1.display();
  
 
}

function keyPressed(){
  if ( keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  }
}

