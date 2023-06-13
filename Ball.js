class Ball extends GameObject {
    constructor(container, src, width, height,x,y,velX,velY,){
        super(container, src, width, height,x,y,velX,velY);
        
        this.falled=false;

        //container,width,height,x,y,bg
        this.leftSensor=new LeftSensor(this.container,1,30,this.x,this.y,"red");
        this.rightSensor=new RightSensor(this.container,1,30,this.x+this.width,this.y,"red");
        this.topSensor=new TopSensor(this.container,30,1,this.x,this.y,"red");
        this.bottomSensor=new BottomSensor(this.container,30,1,this.x,this.y+this.height,"red");
    }        

    
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;  
     
        if(this.x>=500-25 || this.x<=0){
            this.velX=-this.velX;
        }
        if(this.y>=800-25 || this.y<=0){
            this.velY=-this.velY;
        }

        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();

        this.topSensor.tick(this);
        this.topSensor.render();

        this.bottomSensor.tick(this);
        this.bottomSensor.render();

     
    }

    setPosition(x, y){
        this.x=x;
        this.y=y;

        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();

        this.topSensor.tick(this);
        this.topSensor.render();

        this.bottomSensor.tick(this);
        this.bottomSensor.render();
        
        this.render();
    }
    
}