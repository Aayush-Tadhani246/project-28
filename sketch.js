
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  boy = loadImage("Images/boy.png");
  tree = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,680,1600,20);

	rock = new Rock(120,535,70,70);

	mango1 = new Mango(450,420,50,50)
	mango2 = new Mango(570,440,50,50)
	mango3 = new Mango(550,350,50,50)
	mango4 = new Mango(670,370,50,50)
	mango5 = new Mango(700,410,50,50)

   slingShot = new SlingShot(rock.body,{x:110,y: 525});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
  ground.display();
 

  image (boy,90,475,120,200)
  image (tree,400,280,400,400)

  rock.display();
  slingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(rock.body,{x:110 ,y:525})
    console.log(keyCode);
    slingShot.attach(rock.body);
  }
}

function detectCollision(lrock,lmango){
  mangoBodyPosition = lmango.body.position
  rockBodyPosition = lrock.body.position

  var distance = dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y) 
  if (distance<= lmango.width + lrock.width){  
        Matter.Body.setStatic(lmango.body,false); 
  }
  
}