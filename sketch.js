var dog ;
var happyDog ; 
var database ; 
var foodS ;
var foodStock ; 



function preload(){
  dogImg = loadImage("sprites/dogimg.png");
  dogImg1 = loadImage("sprites/dogimg1.png");
}
function setup(){
  database = firebase.database();
  createCanvas(1000,800);

foodStock = database.ref;
foodStock.on("value",readStock);




  var canvas = createCanvas(500,500);
  var dog = new Dog(800,200,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

}
function draw(){
  background(46,139,87);
  dog.display();
  happyDog.display();
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogImg1.png);
  }
  drawSprites()

textSize(15);
fill ("black");
stroke ("black");
}
function readStock(data){
  foodS= data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

