function Moneda(x,y,image){

    Kinetic.Image.call(this);
    this.setWidth(30);
    this.setHeight(30);
    this.setX(x);
    this.setY(y);
    //this.setFill('yellow');
    this.setImage(image);
}

Moneda.prototype = Object.create(Kinetic.Image.prototype);