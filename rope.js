class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        if(this.rope.bodyA!=null);
        {var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.rope.bodyA=null;
    }
    
}