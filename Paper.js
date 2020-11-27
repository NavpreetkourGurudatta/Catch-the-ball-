class Paper{
    constructor(x,y){
       var options = {
           isStatic:false,
           restitution:0.3,
           friction = 0.5,
           density = 1.2
       } 
       this.body = Bodies.circle(x,y,20,20);
       this.width = width;
       this.height = height;
       World.add(world,Paper) 
    }
display(){
    var pos = this.body.position;
    fill("purple") 
    ellispe(56,46,55,55);
    ellispe(pos.x,pos.y);
}

}