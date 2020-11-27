class Dustbin{
    constructor(x,y,height){ 
var option = {
    restitution :0,
  density :1,
    friction :1,
    isStatic:true
 }
 this.body = Bodies.rectangle(x,y,30,height,option);
 this.width = 30
 this.height = height;
 World.add(world,Dustbin);
    }
    display(){
       var pos = this.body.position;
         fill('white');
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
     }
    }
    
