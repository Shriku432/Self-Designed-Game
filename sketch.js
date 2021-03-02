var pitch,pitchImage
var batsmen,batsmen1Image
var bowler,bowlerImage

function preload(){

pitchImage = loadImage("pitch.jpg")
batsmen1Image = loadImage("batsmen.png")
bowlerImage = loadImage("bowler.jpg")


}

function setup() {
  createCanvas(displayWidth+100,displayHeight+100);
  pitch = createSprite(800,50,displayWidth,displayHeight);
  pitch.addImage(pitchImage)
  pitch.scale=8

  batsmen = createSprite(740,500,20,40);
  batsmen.addImage(batsmen1Image)
  batsmen.scale= 2

  batsmen2 = createSprite(712,331,20,40)
  //batsmen2.addImage(batsmen2Image)
  //batsmen2.scale=2

  bowler = createSprite(831,247,20,40)
  bowler.addImage(bowlerImage)
  bowler.scale=0.2
  

}

function draw() {
  background(255,255,255);  
   drawSprites();
   textSize(50)
   text(mouseX+ " " +mouseY,mouseX,mouseY)

}