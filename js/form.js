class Form{
   constructor(){
       
       this.button=createButton("Play");
       this.input=createInput("");
       this.greet=createElement('h3');
       this.title=createElement('h2');
       this.reset=createButton("Reset");
   }
   hide(){
       this.greet.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();
   }
   display()
   {
      this.title.html('Car Racing Game');
      
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.title.position(displayWidth/2-50,0);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        console.log(playercount);
        player.name=this.input.value();
        playercount++;
        player.index=playercount;
        player.update();
        player.updatecount(playercount)
        
        this.greet.html("Hello "+player.name);
        this.greet.position(displayWidth/2-70,displayHeight/4)
    })
    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
        game.update(0);
        player.updatecount(0);
    })
    }
}