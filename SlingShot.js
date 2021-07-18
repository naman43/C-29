class SLINGSHOT{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,sling);
    }
    fly(){
      this.sling.BodyA = null;      
    }

    display(){
        if(this.sling.BodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;   

            stokeWeight(4);
            fill("pink");
            line(pointA.x , pointA.y, pointB.x, pointB.y);
        }
    }
}