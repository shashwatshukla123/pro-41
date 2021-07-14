class createDrop {
    constructor(x, y,r) {

        var options ={
            friction : 0.1
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color= "blue";
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    update(){
        if (this.body.position.y>height) {
            Matter.Body.setPosition(this.body,{x: (0,400), y: random(0,400)})
        }
    }

};