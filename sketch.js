var gardenimg , garden;
var jerry4 , jerry3 , jerry2 , jerry1;
var tom4 , tom3 , tom2 , tom1;
var jsp , tsp;






function preload() {
    //load the images here
 jerry1 = loadImage("jerryOne.png");
 jerry2 = loadImage("jerryTwo.png");
 jerry3 = loadImage("jerryThree.png");
 jerry4 = loadImage("jerryFour.png");

 tom1 = loadImage("tomOne.png");
 tom2 = loadImage("tomTwo.png");
 tom3 = loadImage("tomThree.png");
 tom3 = loadImage("tomFour.png");

 gardenimg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
 jsp = createSprite(70,600);
 jsp.scale=0.5;
 jsp.addImage(jerry1);

 tsp = createSprite(900,600);
 tsp.scale=0.5;
 tsp.addImage(tom1);

 garden = createSprite(500,400);
 garden.scale=6;
 garden.addImage(gardenimg);
    //create tom and jerry sprites here

}

function draw() {

    background(255);

    keyPressed();

    //Write condition here to evalute if tom and jerry collide

 if(tsp.x - jsp.x < (tsp.width - jsp.width)/2){
     tsp.addImage(tom3);
     tsp.changeImage(tom3);
     tsp.velocityX=0;
 }
    drawSprites();
    textSize(24);
    fill("red");
    text(mouseX + "," + mouseY,10,45)
}


function keyPressed(){

 if(keyCode===LEFT_ARROW){
     tsp.velocityX=-5;
     tsp.addImage(tom2);
     tsp.changeImage(tom2);
 }
  //For moving and changing animation write code here


}
