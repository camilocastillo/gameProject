
function Piso(x,y,imagen){
 
    Kinetic.Rect.call(this);
    this.setFill('black');
    this.setWidth(200);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
}

Piso.prototype = Object.create(Kinetic.Rect.prototype);