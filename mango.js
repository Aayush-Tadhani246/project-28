class Mango{
    constructor(x,y,width,height){
       var options ={
           isStatic:true,
           'restitution': 0, 
           'friction': 1
       }
       this.image = loadImage("Images/mango.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
     display(){
      var pos =this.body.position;
      push();
       translate(pos.x,pos.y);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       pop();
     }
}

