class Roof{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(400,100,600,15,options);
       this.width = 600;
       this.height = 35;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
  }