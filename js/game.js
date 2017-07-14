function Game(){

    Kinetic.Rect.call(this);
    this.estado = 'antes';
    this.puntaje = 0;
    this.llave = false;
    this.nivel = 1;
}

Game.prototype = Object.create(Kinetic.Rect.prototype);