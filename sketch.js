const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var player;
var cpl;
var cBase;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  playerBase = new playbb(300, random(450,height-300),180,150);
  player = new playy(285, playerBase.body.position.y-153,50,180); //Create Player Base and Computer Base Object
  cBase = new compbb(1000, random(450,height-300),180,150);
  cpl = new complayy(1000, cBase.body.position.y-153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   player.display();//Display Playerbase and computer base 
   playerBase.display();

   cBase.display();
   cpl.display();//display Player and computerplayer


}
