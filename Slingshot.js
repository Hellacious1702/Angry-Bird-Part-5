class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.img1 = loadImage("./sprites/sling1.png");
        this.img2 = loadImage("./sprites/sling2.png");
        this.img3 = loadImage("./sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1, 200, 20);
        image(this.img2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#301608')
            

            
            if(pointA.x < 220){
                image(this.img3 , pointA.x - 30, pointA.y - 10 , 15 , 30 );
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 20, pointB.y);
            }else{
                image(this.img3 , pointA.x + 24, pointA.y - 10 , 15 , 30 );
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 20, pointB.y);
            }
        }

    }
    
}