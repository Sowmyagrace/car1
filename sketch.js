var db,allplayers;
var form,game,player;
var playercount,gamestate=0;
var distance=0;
var cars,car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img;
var bgimg,trackimg;
function preload(){
    car1_img=loadImage("../images/car1.png");
    car2_img=loadImage("../images/car2.png");
    car3_img=loadImage("../images/car3.png");
    car4_img=loadImage("../images/car4.png");

    bgimg=loadImage("../images/ground.png");
    trackimg=loadImage("../images/track.jpg")

}
function setup(){
    db=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game =new Game();
    game.getstate();
    game.start();
    
}
 function draw(){
   // var button=createButton("h3");
    //button.html("reset");
    // button.mousePressed(reset());
if(playercount===4)
{
    game.update(1);
    gamestate=1
}
if(gamestate===1)
{
    clear();
    game.play();
}
if(gamestate===2){
   // game.update(2);
    game.end();

}

 }
 function reset()
 {
     db.ref("/").set({
         gameState:0,
         playerCount:0
     })
     db.ref("/").remove("Players/Player");
     db.ref("/").remove("Players");
    }