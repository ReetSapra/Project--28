
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (200,700,6000,10)
	mango1 = new Mango (600,300,20,60);
	mango2 = new Mango (600,300,20,60);
	mango3 = new Mango (550,400,20,60);
	mango4 = new Mango (600,500,20,60);
	stone = new Stone (170,500,20,20);
	tree = new Tree (700,350,200,600)
	boy = new Boy (200,600,100,200)
	chain = new Chain(stone.body,{x:170,y:600});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  stone.display();
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  chain.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}

function mouseReleased (){
    chain.fly()
}



