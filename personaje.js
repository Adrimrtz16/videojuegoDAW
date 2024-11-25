let posicionProtagonista = 0;

function Personaje() {
    this.x = 120;
    this.y = 896;
    this.velocidad = 6; 
    this.velocidadSalto = 13; 
    this.velocidadCaida = 13;
    this.tamañoX = 60;
    this.tamañoY = 60;
    this.yAntesDelSalto;
    this.haSaltado = false;
    this.haLLegadoArriba = false;
    this.aterrizado = true;
    this.saltarEnAire = true;
    this.imagen = imgSpriteProta
    this.posicionSprite = [[64,64],[0,64]]
    this.estadoDeLaAnimacion = 1
}

Personaje.prototype.pintarPersonaje = function() {
    ctxFrente.drawImage(this.imagen, 
                  this.posicionSprite[posicionProtagonista][0], 
                  this.posicionSprite[posicionProtagonista][1], 
                  64, 
                  64, 
                  this.x, 
                  this.y, 
                  this.tamañoX, 
                  this.tamañoY);
}

Personaje.prototype.generaPosicionDerecha = function() {
    this.posicionSprite = [[64,64],[0,64]];
    this.estadoDeLaAnimacion = 2;
    this.x += this.velocidad;
    
    if (this.x > topeDerecha) {
        this.x = topeDerecha;
    }

}

Personaje.prototype.generaPosicionIzquierda = function() {
    this.posicionSprite = [[0,0],[64,0]];
    this.estadoDeLaAnimacion = 2;
    this.x -= this.velocidad;
    
    if (this.x < topeIzquierda) {
        this.x = topeIzquierda;
    }

}

Personaje.prototype.personajeCorriendo = function() {
    this.velocidad = 13; 
}

Personaje.prototype.personajeAndando = function() {
    this.velocidad = 6; 
}

Personaje.prototype.personajeSaltando = function() {
    if (this.haSaltado === false) {
        this.yAntesDelSalto = this.y;
        this.haSaltado = true;
        this.haLLegadoArriba = false;
        this.saltarEnAire = false;
    }

    if (this.haLLegadoArriba === false) {
        this.y -= this.velocidadSalto;

        if (this.y <= this.yAntesDelSalto - 250) {
            this.haLLegadoArriba = true;
        }

    }

    if (this.haLLegadoArriba === true) {
        this.y += this.velocidadSalto;

        if (this.y >= this.yAntesDelSalto) {

            this.y = this.yAntesDelSalto;
            saltar = false;
            this.haSaltado = false;
            this.haLLegadoArriba = false;
            this.velocidadCaida = 1
        }
    }
    
}

function posicionDelProtagonista() {
    posicionProtagonista = (posicionProtagonista + 1) % protagonista.estadoDeLaAnimacion;
}
