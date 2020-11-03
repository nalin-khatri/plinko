
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var border1, border2, border3, border4;

var lefttDivision, rightDivision;

var divisionHeight = 300;

//array
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //create bodies
  ground = new Base(200,785,700,15);

  border1 = new Border(240,4,500,7);
  border2 = new Border(476,400,7,810);
  border3 = new Border(240,796,500,7);
  border4 = new Border(4,400,7,810);

   for(var d=0; d<=width; d=d+80){
    divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }
  
  leftDivision = new Division(9, 650, 10, 300);
  rightDivision = new Division(470, 650, 10, 300);
  
  for(var pl=40; pl<=width; pl=pl+50){
    plinkos.push(new Plinko(pl, 75));
  }

  for(var pl=15; pl<=width-10; pl=pl+50){
    plinkos.push(new Plinko(pl, 175));
  }

  for(var pl=40; pl<=width; pl=pl+50){
    plinkos.push(new Plinko(pl, 275));
  }

  for(var pl=15; pl<=width-10; pl=pl+50){
    plinkos.push(new Plinko(pl, 375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  // console.log(divisions);

  for(var d=0; d<divisions.length; d++){
    divisions[d].display();
  }

  leftDivision.display();
  rightDivision.display();

  for(var pl=0; pl<plinkos.length; pl++){
    plinkos[pl].display();
  }
  
   if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var par=0; par<particles.length; par++){
    particles[par].display();
  }

  border1.display();
  border2.display();
  border3.display();
  border4.display();
}