var Dog,dog,bone,poison,DF,df,DD;
var edges;
var A1,A2;
var BonesGroup;
var PoisonsGroup;
var DogFoodsGroup;
var gameState
var score=0;

function preload(){
dog=loadImage("images/dogImg.png");
bg=loadImage("images/bg.jpeg");
bone=loadImage("images/bone.png");
poison=loadImage("images/Poison.png");
DF=loadImage("images/DogFood.jpeg");
DD=loadImage("images/DeadDog.jpeg");
}

function setup() {
  createCanvas(600,600);

  Dog=createSprite(550,300,150);
  Dog.addImage(dog);
  Dog.scale=0.15;

  A1=createSprite(70,10,1200,10);
  A1.shapeColor="black";

  A2=createSprite(300,590,600,10);
  A2.shapeColor="black";

  PoisonsGroup = createGroup();
  BonesGroup = createGroup();
  DogFoodsGroup = createGroup();
}

function draw() {
  background("black");

textSize(15);
fill("white");
text("score:"+score, 10,585);

  

  if(keyDown(DOWN_ARROW)){
    Dog.velocityY=5;
  }

  if(keyDown("UP_ARROW")){
    Dog.velocityY=-5;
  }

Dog.bounceOff(A1);
Dog.bounceOff(A2);
 
spawnPoison();
spawnBones();
spawnDF();

if(Dog.isTouching(BonesGroup)){
  BonesGroup.destroyEach();
  score = score+1;
}

if(Dog.isTouching(DogFoodsGroup)){
  DogFoodsGroup.destroyEach();
  score = score+5;
}

if(Dog.isTouching(PoisonsGroup)){
  PoisonsGroup.destroyEach();
  score = score-10;
}



  drawSprites();
}

function spawnPoison(){
if(frameCount % 700 === 0){
var Poison=createSprite(10,300,50,50);
Poison.y = Math.round(random(20,580));
Poison.addImage(poison);
Poison.scale = 0.3;
Poison.velocityX = 8;
Poison.lifetime = 300;

PoisonsGroup.add(Poison);
}
}

function spawnBones(){
if(frameCount % 100 === 0 ){
var Bone=createSprite(10,400,50,50);
Bone.y = Math.round(random(20,580));
Bone.addImage(bone);
Bone.scale = 0.3;
Bone.velocityX = 5;
Bone.lifetime = 300;

BonesGroup.add(Bone);
}
}

function spawnDF(){
  if(frameCount % 250 === 0 ){
  var df=createSprite(10,400,50,50);
  df.y = Math.round(random(20,580));
  df.addImage(DF);
  df.scale = 0.3;
  df.velocityX = 5;
  df.lifetime = 300;
  
  DogFoodsGroup.add(df);
  }
  }

  