class Ground{
constructor(x,y,width,height){
var options = {
 isStatic :true, 
 }
    
     this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world,Ground);
}
 display(){
     var pos = this .body.postion;
     fill("yellow");
     rectMode(centre);
     rect(pos.x,pos.y,this.width,this.height);
 }
}