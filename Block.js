class Block{
    constructor(x, y, width, height) {
      
      this.visibility = 255; 
    
        var options = {
           
            restitution :0.4,
            friction :0.0
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        console.log(this.body.speed);
        if(this.body.speed < 3 ){}

      else
        {
         World.remove(world,this.body) ;
         push();
          this.Visibility = this.Visibility - 5;
         tint(255, this.Visibility);
         pop();
        }
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
       
    };