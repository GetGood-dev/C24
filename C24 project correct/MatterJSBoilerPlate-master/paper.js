class paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.2,
          'friction':0.3,
          'density':1.0,
          'setGravity': 10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      

      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };