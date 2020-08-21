class Plinko {
    constructor(x,y,width,height) {
      
      this.body = Bodies.circle(x,y,width,r);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      Push();
      rotate(angle);
      fill("this.color");
      ellipseMode(RADIUS);
      ellipse( 2.5 , 2.5, this.r , this.r);
      pop();
    }
  };
