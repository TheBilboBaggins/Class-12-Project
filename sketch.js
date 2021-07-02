var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  CreateApples()
  CreateLeaves()
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
   
  drawSprites()
} 


function CreateApples(){

  if(frameCount%80 === 0){
    apple = createSprite(200,0)
    apple.addImage(appleImg)
    apple.scale  = 0.05
    apple.velocityY = 3
    apple.x = random(50,350)
    
  }
}

function CreateLeaves(){
  if(frameCount%100 === 0){
  leaf = createSprite(300,0)
  leaf.addImage(leafImg)
      leaf.scale = 0.1
  leaf.velocityY = 3
  leaf.x = random(50,350)
}
}
