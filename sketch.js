const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bg, black1,queen,striker1;
var white1;

function preload(){
  bg=loadImage("carromboard.png");

}
function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

  rope1=new Rope(striker1.body,{x: 200, y: 100});
 
black1 = new Black(275,200,30,20);
white1 = new White(225,200,30,20);
queen = new Queen(250,198,30,20);
striker1 = new Striker(250,330,30,30);

}
function draw () {
  background(bg);  
  black1.display();
  white1.display();
  queen.display();
  striker1.display();
  rope1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(striker1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope1.fly();

}
function attach(){
      Matter.Body.setPosition(striker1.body, {x:200 , y: 50});   
     rope.attach(striker1.body);
  }
