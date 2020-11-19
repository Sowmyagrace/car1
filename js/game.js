class Game{
    constructor(){}
    getstate()
    {
        var gsref=db.ref("gameState");
        gsref.on("value",function(data){
            gamestate=data.val();
        })

    }
    update(state){
        db.ref("/").update({
            gameState:state
        })
    }
    async start()
    {
        if(gamestate===0){
            player=new Player();
            var playercountref=await db.ref("playerCount").once("value");
            if(playercountref.exists())
            {
                playercount=playercountref.val();
                player.getcount();
            }
            
            
            form=new Form();
            form.display();
        }
        
        car1=createSprite(100,200);
        car1.addImage(car1_img);
        car2=createSprite(300,200);
        car2.addImage(car2_img);
        car3=createSprite(500,200);
        car3.addImage(car3_img);
        car4=createSprite(700,200);
        car4.addImage(car4_img);
        cars=[car1,car2,car3,car4];
    }

    play()
    {
        form.hide();
        textSize(30);
       // text("Game Start",120,100);
        Player.getpinfo();
        if(allplayers!==undefined)
        {
           // var dp=130;
           background(bgimg);
           image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0;
            var x=175;
            var y;
            for(var plr in allplayers)
            {
                index=index+1;
                x=x+200;
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x;
                cars[index-1].y=y;
               if(index===player.index)
                {
               fill("red");
               ellipse(x,y,60,60);
              cars[index-1].shapeColor="red";
              camera.position.x=displayWidth/2;
              camera.position.y=cars[index-1].y;
                }
               

           // dp+=20;
            //textSize(18);
            //text(allplayers[plr].name+":"+allplayers[plr].distance,120,dp);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== 0)
        {
            player.distance=player.distance +10
            console.log(player.distance)
            player.update();
        }
        if(player.distance>displayHeight*5)
        {
            gamestate=2;
        }
        drawSprites();
    }
    end(){
       // clear();
        textSize(100);
        fill("RED");
        stroke("green");
        console.log("Game end")
        text("Game has ended",displayWidth/2,displayHeight/2);
    }
}