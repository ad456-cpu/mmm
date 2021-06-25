const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
  if(backgroundImg){
      background(backgroundImg);
  }

    Engine.update(engine);

  fill("black");
  textSize(30);

    // write code to display time in correct format here
if(hour>=12){
    text("Time :"+ hour%12 + " PM",50,100);
}
else if(hour==0){
    text("Time : 12 AM",100,100);
}
else{
    text("Time : "+ hour%12 +" AM",50,100);
}

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
    // write code slice the datetime
hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>=04 && hour<=06){
    debugger;
    bg="sunrise1.png"
}
if(hour>=06 && hour<=08){
    debugger;
    bg="sunrise2.png"
}
if(hour>=08 && hour<=10){
    debugger;
    bg="sunrise3.png"
}
if(hour>=10 && hour<=12){
    debugger;
    bg="sunrise4.png"
}
if(hour>=12 && hour<=14){
    debugger;
    bg="sunrise4.png"
}
if(hour>=14 && hour<=16){
    debugger;
    bg="sunrise5.png"
}
if(hour>=16 && hour<=18){
    debugger;
    bg="sunrise6.png"
}
if(hour>=18 && hour<=20){
    debugger;
    bg="sunset7.png"
}
if(hour>=20 && hour<=22){
    debugger;
    bg="sunset8.png"
}
if(hour>=22 && hour<=24){
    debugger;
    bg="sunset9.png"
}
if(hour>=24 && hour<=02){
    debugger;
    bg="sunset10.png"
}
if(hour>=02 && hour<=04){
    debugger;
    bg="sunset11.png"
}
if(hour>=04 && hour<=06){
    debugger;
    bg="sunset12.png"
}

    //load the image in backgroundImg variable here
backgroundImg= loadImage(bg);
console.log(backgroundImg);
}
