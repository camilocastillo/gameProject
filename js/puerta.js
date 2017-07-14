function Puerta(x,y){

    Kinetic.Rect.call(this);
    this.setWidth(30);
    this.setHeight(70);
    this.setX(x);
    this.setY(y);
    this.setFill('black');
}

Puerta.prototype = Object.create(Kinetic.Rect.prototype);