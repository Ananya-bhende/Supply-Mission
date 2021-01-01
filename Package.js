class Package {

    constructor(x,y,height,angle){

        var options={
            'restitution':0.8,
            'friction': 0.3,
            'density' : 1

        }
        this.body=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body.angle);
        World.add(world,this.body);
    }
}