var garden,rabbit,apple;
var gardenImg,rabbitImg;
var appleImg;
var leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaves.jpg")
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  if (isKeyPressed) {
    
    
    if(keyCode==37){
      rabbit.x =rabbit.x-4; 
   }
    if (keyCode==39){
      rabbit.x =rabbit.x+4;
   }
  }  


  var select_sprites = Math.round(random(1,2));
console.log(select_sprites);
if (frameCount % 80 == 0) {
  if(select_sprites == 1){

    createapples();

     /*
     function spawnapples(){
      if(frameCount %60 === 0) {
        obstacles = createSprite(600,165,10,40);
        obstacles.velocityX = -6;
        var a = Math.round(random(1,6));
        switch (a){
          case 1:
            apple.addImage(appleImg);
            break;
        }
       }
     }*/
  }else{
    createleaves();

  }
}


}

function createapples(){
  
  apple = createSprite(random(50,300),40,10,10);
  apple.addImage (appleImg);
  apple.scale = 0.02;
  apple.velocityY = +2;
  apple.lifetime = 200;

}
function createleaves(){
  leaves = createSprite(random(70,350),40,10,10);
  leaves.addImage (leavesImg);
  leaves.scale = 0.02;
  leaves.velocityY = +2;
  leaves.lifetime = 200;
}