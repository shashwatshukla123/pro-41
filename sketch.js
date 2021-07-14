const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxDrops = 100;
var drops = [];
var bruce;
var thunder,thunderImg

function preload(){
 thunderImg = loadImage("1.png");   
}

function setup(){
 var canvas = createCanvas(480,800);
 engine = Engine.create();
 world = engine.world; 
 
 bruce = new Umbrella(390,655,350,350);
}

function draw(){
background(0,0,0); 
Engine.update(engine);

  if(frameCount%20===0){
    drops.push(new createDrop(random(400), 5,5));
    
  }
  for (var j = 0; j < drops.length; j++) {
   
    drops[j].display();
  }
  bruce.display();
  
  if (frameCount%12 === 0) {
    thunder = createSprite(210,400,20,20);
    thunder.addImage(thunderImg);
  }

}
