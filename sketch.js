//Create variables here
var dog , happyDog;
var foodS , foodStock;
function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = new Dog(250,250);
 
  
}


function draw() {  

  background(46, 139, 87);

  

  dog.display();
  dog.addImage(dog);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }



  drawSprites();
  //add styles here
  text("foodStock=20",250,150);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  
  database.ref('/').update({
    food:x
  })
}



