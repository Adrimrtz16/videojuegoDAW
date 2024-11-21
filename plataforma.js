function Plataforma (x,y,tamañoX,tamañoY) {
    this.x = x;
    this.y = y;
    this.tamañoX = tamañoX;
    this.tamañoY = tamañoY;
}

Plataforma.prototype.colisionConPlataformaDerecha = function () {

    if (colisionCompleta(protagonista, this) && 
        protagonista.x + protagonista.tamañoX <= this.x + protagonista.velocidad && 
        protagonista.y + protagonista.tamañoY > this.y && 
        protagonista.y < this.y + this.tamañoY 
    ) {
        protagonista.x = this.x - protagonista.tamañoX;
        
    } 
    
}

Plataforma.prototype.colisionConPlataformaIzquierda = function () {

    if (colisionCompleta(protagonista, this) && 
        protagonista.x >= this.x + this.tamañoX - protagonista.velocidad && 
        protagonista.y + protagonista.tamañoY > this.y && 
        protagonista.y < this.y + this.tamañoY 
    ) {
        protagonista.x = this.x + this.tamañoX;
        
    } 
    
}

Plataforma.prototype.colisionConPlataformaAlSaltar = function () {
    
    if(colisionCompleta(protagonista,this)){
        if(protagonista.x + protagonista.tamañoX === this.x){
            protagonista.x = this.x - protagonista.tamañoX;
            
        } else if (protagonista.haLLegadoArriba) {
            protagonista.y = this.y - protagonista.tamañoY + 1;
            saltar = false;
            protagonista.haSaltado = false;
            protagonista.saltarEnAire = true;
        }
        protagonista.haLLegadoArriba = true;
        
    } else {
        protagonista.aterrizado = false;
    }
    
}

Plataforma.prototype.personajeCayendo = function() {

    // Verificamos si hay colisión con la plataforma
    if (colisionCompleta(protagonista, this)) {
        // Ajustamos exactamente la posición del personaje a la parte superior de la plataforma
        protagonista.y = (this.y - protagonista.tamañoY);
        protagonista.aterrizado = true;
        protagonista.saltarEnAire = true;
        protagonista.velocidadCaida = 13
    } else if (protagonista.aterrizado === false) {
        protagonista.y += protagonista.velocidadCaida;
        if(protagonista.saltarEnAire === true) {
            protagonista.aterrizado = true;
        }
        
    } 

}