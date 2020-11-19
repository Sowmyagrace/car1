class Player
{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }
    
    getcount()
    {
        var pcref=db.ref("playerCount");
        pcref.on("value",function(data){
            playercount=data.val();
        })
    }
    updatecount(count){
        db.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var pindex="Players/Player"+this.index;
        db.ref(pindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getpinfo()
    {
        var pinforef=db.ref("Players");
        pinforef.on("value",(data)=>{
            allplayers=data.val();
        })
    }

}