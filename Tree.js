class Tree{
  constructor (x,y, width,height){
      var options = {
         isStatic:true,
      }
      
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.image = loadImage("sprite/tree.png");
  World.add(world, this.body);
}
display(){
  push();
  imageMode(CENTER);
  image(this.image,600, 500 , this.width, this.height);
  pop();

  }
}
    
