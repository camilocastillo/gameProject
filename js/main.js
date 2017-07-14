var stage;
var fondo;
var grupoEnemi;
var keyboard = {};
var intv;
var personaje;
var grav = 1.2;
var val_reb = 0;
var puntaje;
var b = false;
var juego = new Game();
var imgEn = new Image();
imgEn.src = 'img/enemy.png';
var imagPla = new Image();
imagPla.src = 'img/plataforma.png';
var imagPiso = new Image();
imagPiso.src = 'img/piso.png';
var imageHero = new Image();
imageHero.src = 'img/heroe2.png';
var imageMon =  new Image();
imageMon.src ='img/coin.png';
var imageFon = new Image();
imageFon.src = 'img/fondo.png';

var framesP = {
        estatico: [{
            x:2,
            y:0,
            width: 31,
            height: 69
        }],
        caminar:[{
            x:184,
            y:0,
            width: 31,
            height: 69
        },{
            x:126,
            y:0,
            width: 31,
            height: 69
        },{
            x:64,
            y:0,
            width: 31,
            height: 69
        }],
        saltar:[{
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        },
        {
            x:307,
            y:0,
            width: 31,
            height: 69
        }]
};

grupoEnemi= new Kinetic.Group({
    x:0,
    y:0
});

stage = new Kinetic.Stage({
    container: 'game',
    width: 960,
    height: 500
});


var ImageFondo = new Kinetic.Image({
    x:0,
    y:0,
    image:imageFon,
    width: stage.getWidth(),
    height: stage.getHeight()
});

puntaje = new Kinetic.Text({
    text:'PUNTAJE : 0',
    height: 25,
    width:150,
    x:stage.getWidth()-150,
    y:15,
    fill:'#ffffff',
    fontFamily: 'Arial bold',
    fontSize:20 
});


function nivelUno(){
    
    if(b) return;
    b = true;
    juego.llave = true;
    fondo = new Kinetic.Layer();
    console.log(imgEn);
    //Enemigos 
    grupoEnemi.add(new Enemigo(200,stage.getHeight() - 75, imgEn));
    grupoEnemi.add(new Enemigo(850,stage.getHeight()/3.9 - 60, imgEn));
    grupoEnemi.add(new Enemigo(170,stage.getHeight()/3 - 60, imgEn));
    grupoEnemi.add(new Enemigo(1020,stage.getHeight() - 75, imgEn));
    grupoEnemi.add(new Enemigo(1120,stage.getHeight() - 75, imgEn));
    grupoEnemi.add(new Enemigo(1220,stage.getHeight() - 75, imgEn));

    //plataforma
    var piso = new Plataforma(0,stage.getHeight()-15,imagPiso);
    piso.setWidth(stage.getWidth()*2);
    grupoEnemi.add(piso);
    grupoEnemi.add(new Plataforma(20,stage.getHeight()/1.5,imagPla));
    grupoEnemi.add(new Plataforma(190,stage.getHeight()/3,imagPla));
    grupoEnemi.add(new Plataforma(510,stage.getHeight()/1.6,imagPla));
    grupoEnemi.add(new Plataforma(870,stage.getHeight()/3.9,imagPla));
    grupoEnemi.add(new Plataforma(1320,stage.getHeight()/1.5,imagPla));
    
    //monedas
    grupoEnemi.add(new Moneda(350,stage.getHeight()/3-130,imageMon));
    grupoEnemi.add(new Moneda(650,stage.getHeight()/2-130,imageMon));
    grupoEnemi.add(new Moneda(80,stage.getHeight()-80,imageMon));
    grupoEnemi.add(new Moneda(350,stage.getHeight()/3-130,imageMon));
    grupoEnemi.add(new Moneda(910,stage.getHeight()/6,imageMon));
    grupoEnemi.add(new Moneda(1220,stage.getHeight()-80,imageMon));
    grupoEnemi.add(new Moneda(1520,stage.getHeight()/3-130+100,imageMon));
    grupoEnemi.add(new Moneda(1620,stage.getHeight()/6+100,imageMon));
    grupoEnemi.add(new Moneda(1820,stage.getHeight()-80,imageMon));

    //puerta
    grupoEnemi.add(new Puerta(stage.getWidth()*2, stage.getHeight()-85));

    personaje = new Heroe(imageHero,framesP);
    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight());
    personaje.limiteTope = stage.getHeight();
    personaje.limiteDerecha = stage.getWidth() - personaje.getWidth();
    fondo.add(ImageFondo);
    fondo.add(personaje);
    fondo.add(grupoEnemi);
    fondo.add(puntaje);
    console.log(personaje);
    personaje.start();
    stage.add(fondo);
    intv = setInterval(frameLoop,1000/20);
    
}

function nivelDos(){
    juego.llave = false;
    fondo = new Kinetic.Layer();
    console.log("SIguiente nivel...");
    //Enemigos 
    grupoEnemi.add(new Enemigo(30,stage.getHeight()/1.5-60, imgEn));
    grupoEnemi.add(new Enemigo(250,stage.getHeight()-75, imgEn));
    grupoEnemi.add(new Enemigo(310,stage.getHeight()-75, imgEn));
    grupoEnemi.add(new Enemigo(370,stage.getHeight()-75, imgEn));
    grupoEnemi.add(new Enemigo(850,stage.getHeight()/3.9 - 60, imgEn));
    grupoEnemi.add(new Enemigo(170,stage.getHeight()/3 - 60, imgEn));
    grupoEnemi.add(new Enemigo(1020,stage.getHeight() - 75, imgEn));
    grupoEnemi.add(new Enemigo(1120,stage.getHeight() - 75, imgEn));
    grupoEnemi.add(new Enemigo(1220,stage.getHeight() - 75, imgEn));

    //plataforma
    var piso = new Plataforma(0,stage.getHeight()-15,imagPiso);
    piso.setWidth(stage.getWidth()*2);
    grupoEnemi.add(piso);
    grupoEnemi.add(new Plataforma(20,stage.getHeight()/1.5,imagPla));
    grupoEnemi.add(new Plataforma(190,stage.getHeight()/3,imagPla));
    grupoEnemi.add(new Plataforma(510,stage.getHeight()/3.5,imagPla));
    grupoEnemi.add(new Plataforma(870,stage.getHeight()/3.9,imagPla));
    grupoEnemi.add(new Plataforma(1320,stage.getHeight()/1.5,imagPla));
    
    //monedas
    grupoEnemi.add(new Moneda(350,stage.getHeight()/3-130,imageMon));
    grupoEnemi.add(new Moneda(650,stage.getHeight()/2-130,imageMon));
    grupoEnemi.add(new Moneda(80,stage.getHeight()-80,imageMon));
    grupoEnemi.add(new Moneda(350,stage.getHeight()/3-130,imageMon));
    grupoEnemi.add(new Moneda(910,stage.getHeight()/6,imageMon));
    grupoEnemi.add(new Moneda(1220,stage.getHeight()-80,imageMon));
    grupoEnemi.add(new Moneda(1520,stage.getHeight()/3-130+100,imageMon));
    grupoEnemi.add(new Moneda(1620,stage.getHeight()/6+100,imageMon));
    grupoEnemi.add(new Moneda(1820,stage.getHeight()-80,imageMon));

    //puerta
    grupoEnemi.add(new Puerta(stage.getWidth()*2, stage.getHeight()-85));

    personaje = new Heroe(imageHero,framesP);
    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight());
    personaje.limiteTope = stage.getHeight();
    personaje.limiteDerecha = stage.getWidth() - personaje.getWidth();
    fondo.add(ImageFondo);
    fondo.add(personaje);
    fondo.add(grupoEnemi);
    fondo.add(puntaje);
    console.log(personaje);
    personaje.start();
    stage.add(fondo);
    intv = setInterval(frameLoop,1000/20);
    
}


function moverPersonaje(){

    if((personaje.getAnimation() != 'caminar') && (keyboard[37] || keyboard[39]) && !personaje.estaSaltando){
            personaje.setAnimation('caminar');
    }

    if(keyboard[37]){
        personaje.retroceder();
    }
    if(keyboard[39]){
        personaje.caminar();
    }
    if(keyboard[38] && personaje.contador < 1){
        personaje.saltar();
    }

    if(!(keyboard[37]||keyboard[39]||keyboard[38]) && !personaje.estaSaltando){
        personaje.setAnimation('estatico');
    }
    
    if(!(keyboard[37]||keyboard[39]||keyboard[38]) && !personaje.estaSaltando){
        personaje.setAnimation('estatico');
    }

}

function addKeyBoardEvents(){
    
    addEvent(document,"keydown",function(e){
        keyboard[e.keyCode] = true;
    });
    addEvent(document,"keyup",function(e){
        keyboard[e.keyCode] = false;
    }); 

    function addEvent(element,eventName,funct){
        if (element.addEventListener){
            element.addEventListener(eventName,funct,false);
        }
        else{
            element.attachEvent(enevtName,funct);    
        }
    }
}

function hit(a,b){
       
        var hit = false;

        //colisiones Horizontales
        if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX()+ a.getWidth()){
            
            //colisiones vertical
            if(b.getY() + b.getHeight() >= a.getY() && b.getY()< a.getY() + a.getHeight())
                hit = true;
        }
        
        //Colision de a con b
        if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth()){

            if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
                hit = true;
        }

        //Colisiones de b con a
        if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth()){

            if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
            hit = true; 
        }
        return hit;
}

function moverFondo(){
    if(personaje.getX() > (stage.getWidth()/2) && keyboard[39]){
        personaje.vx = 3;
            for(i in grupoEnemi.children){
                var asset = grupoEnemi.children[i];
                asset.move(-5,0);
            }
    }else{
        personaje.vx = 10;
    }
}

function aplicarFuerzas(){
    personaje.aplicarGravedad(grav,val_reb);
}

function moverEnemigos(){
    var enemigos = grupoEnemi.children;
    for(i in enemigos){
        var enem = enemigos[i];
        if(enem instanceof Enemigo)
            enem.mover();
    }
}

function detectarColPlataforma(){
        var plataformas = grupoEnemi.children;
        for(i in plataformas){
            var plataform = plataformas[i];
            if(hit(plataform,personaje)){
                if(plataform instanceof Enemigo){
                    if(personaje.vy > 2 && personaje.getY() < plataform.getY()){
                            plataform.remove();
                            juego.puntaje += 5;
                    }else{
                            console.log("fin del juego");
                    }
                }
                else if(plataform instanceof Plataforma && personaje.getY() < plataform.getY() && personaje.vy >= 0){
                      personaje.contador = 0;
                      personaje.setY(plataform.getY() - personaje.getHeight());  
                      personaje.vy *= val_reb;
                }
                else if(plataform instanceof Moneda){
                        plataform.remove();
                        juego.puntaje++;
                }
                else if (plataform instanceof Puerta && juego.llave){
                    if(juego.nivel == 1)  {
                        grupoEnemi.removeChildren();
                        window.clearInterval(intv);
                        juego.nivel = 2;
                        nivelDos();
                    }
                    else if(juego.nivel == 2) {
                        console.log("Gano"); 
                    }
                }
                       
            } 
        }
}
function dibujarTexto(){
    puntaje.setText('Puntaje: '+juego.puntaje);
}
addKeyBoardEvents();



function frameLoop(){
    aplicarFuerzas();
    dibujarTexto();
    detectarColPlataforma();
    moverFondo();
    moverPersonaje();
    moverEnemigos();
    stage.draw();
}