class Polygon {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      
      this.body = Bodies.circle(x,y,80,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      ellipseMode(CENTER)
      ellipse(this.body.position.x,this.body.position.y,80,80)
      
       
      
    }
  } 