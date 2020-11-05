class SlingShot{
    constructor(bodyA, pointB){
        //properties    
    var options = {
        'bodyA': bodyA,
        'pointB': pointB,
        'length': 3,
        'stiffness': 0.004
    };
    this.pointB = pointB;
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);
    }

    fly(){
        //detaching the bird body from the constraint - null datatype means there is nothing
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var posA= this.sling.bodyA.position;
            var posB= this.sling.pointB;
            console.log(this.sling.pointB);
            stroke("brown");
            strokeWeight(4);
            line(posA.x,  posA.y, posB.x, posB.y);
        }
      
    }

}