class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.death = false;
  }
  display(){
    if (this.body.speed>3){
      this.image = loadImage("sprites/InjuredPig.png")
    }
    else if(this.body.speed<4 && this.death ===false){
      super.display();
    }
    else{
      this.death = true;
      World.remove(world,this.body);
     // push();
     // this.visibility = this.visibility-5;
      //tint(255,this.visibility);
      //image(this.image,this.body.position.x,this.body.position.y,50,50)
      //pop();
    }


  }
}