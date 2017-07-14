/*
function Plataforma(x,y){

    Kinetic.Rect.call(this);    
    this.setWidth(200);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
    //this.setImage(imagen);
    this.setFill('black');
}

Plataforma.prototype = Object.create(Kinetic.Rect.prototype);
*/


function Plataforma(x,y,imagen){

    Kinetic.Image.call(this);    
    this.setWidth(200);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
    this.setImage(imagen);
}

Plataforma.prototype = Object.create(Kinetic.Image.prototype);