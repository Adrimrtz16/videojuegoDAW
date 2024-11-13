window.onload = function() {

    const topeDerecha = 1850;
    const topeIzquierda = 0;
    const suelo = 940 - 54;

    let fondo, ctxFondo, frente, ctxFrente;
    let xDerecha, xIzquierda, correr, saltar;
    let posicionChoque;

    function Personaje() {
        this.x = 120;
        this.y = suelo;
        this.velocidad = 1.5; 
        this.velocidadSalto = 3; 
        this.velocidadCaida = 0.4;
        this.tamañoX = 55;
        this.tamañoY = 55;
        this.yAntesDelSalto;
        this.haSaltado = false;
        this.haLLegadoArriba = false;
        this.aterrizado = true;
    }

    Personaje.prototype.generaPosicionDerecha = function() {

        this.x += this.velocidad;
        
        if (this.x > topeDerecha) {
            this.x = topeDerecha;
        }

    }

    Personaje.prototype.generaPosicionIzquierda = function() {

        this.x -= this.velocidad;
        
        if (this.x < topeIzquierda) {
            this.x = topeIzquierda;
        }

    }

    Personaje.prototype.personajeCorriendo = function() {
        this.velocidad = 3; 
    }

    Personaje.prototype.personajeAndando = function() {
        this.velocidad = 1.5; 
    }

    Personaje.prototype.personajeSaltando = function() {
        if (this.haSaltado === false) {
            this.yAntesDelSalto = this.y;
            this.haSaltado = true;
            this.haLLegadoArriba = false;
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
    
            }
        }
        
    }

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
        
        protagonista.aterrizado = false;

        if(colisionCompleta(protagonista,this)){
            if(protagonista.x + protagonista.tamañoX === this.x){
                protagonista.x = this.x - protagonista.tamañoX;
                
            } else if (protagonista.haLLegadoArriba){
                protagonista.y = this.y - protagonista.tamañoY +1
                saltar = false;
                protagonista.haSaltado = false;
                protagonista.haLLegadoArriba = false;
                protagonista.aterrizado = true;
            }

            protagonista.haLLegadoArriba = true;
                
            }
        
    }
 
    Plataforma.prototype.personajeCayendo = function(posicionChoque) {
            
        if (colisionCompleta(protagonista, this)) {
            protagonista.y = Math.ceil(this.y - protagonista.tamañoY) //+ 1 - posicionChoque;
            protagonista.aterrizado = true;
        } else {
            protagonista.y += protagonista.velocidadCaida;
            if(protagonista.y >= suelo) {
                protagonista.y = suelo;
                protagonista.aterrizado = true;
            }
                
        }
        
    }


    function moverPersonaje() {

        if (xDerecha) {
            protagonista.generaPosicionDerecha();
            plataformas.forEach(plataforma => {
                plataforma.colisionConPlataformaDerecha();
            });
        }

        if (xIzquierda) {
            protagonista.generaPosicionIzquierda();
            plataformas.forEach(plataforma => {
                plataforma.colisionConPlataformaIzquierda();
            });
        }

        if (correr) {
            protagonista.personajeCorriendo();
        }

        if (saltar) {
            protagonista.personajeSaltando();
            plataformas.forEach(plataforma => {
                plataforma.colisionConPlataformaAlSaltar();
            });
        }
        if (!saltar) {
            plataformas.forEach((plataforma, indice) => {
                posicionChoque = plataformas.length - (indice+1)
                plataforma.personajeCayendo(posicionChoque);
            });
        }
        
        ctxFrente.clearRect(0, 0, 1920, 1080);
        ctxFrente.fillStyle = "#da3737";
        ctxFrente.fillRect(protagonista.x, protagonista.y, protagonista.tamañoX, protagonista.tamañoY);

        
        console.log(protagonista.y + protagonista.tamañoY)
    }

    function fondoNivel1() {
        ctxFondo.fillStyle = "#bef3ff"; 
        ctxFondo.fillRect(0, 0, 1920, 940); 
        ctxFondo.fillStyle = "#683415";
        ctxFondo.fillRect(0, 940, 1920, 180);
        

        plataformas.forEach(plataforma => {
            ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
        });
        
        ctxFondo.font = 'bold 100px arial';
        ctxFondo.fillStyle = 'white';
        ctxFondo.strokeStyle = 'black';     
        ctxFondo.lineWidth = 4;

        ctxFondo.fillText('Tutorial', 50, 100);
        ctxFondo.strokeText('Tutorial', 50, 100);
        
    }

    function activaMovimiento(evt) {
        
        switch (evt.keyCode) {
            case 65:
                xIzquierda = true;
                break;
            case 68:
                xDerecha = true;
                break;
            case 83:
                correr = true;
                break;
            case 32:
                if(protagonista.aterrizado){
                    saltar = true;
                }
                break;
        }
    }

    function desactivaMovimiento(evt) {

        switch (evt.keyCode) {
            case 65:
                xIzquierda = false;
                break;
            case 68:
                xDerecha = false;
                break;
            case 83:
                correr = false;
                protagonista.personajeAndando();
                break;
        }
    }

    function colisionCompleta(obj1, obj2) {

        let colision = false

        if(obj1.x < obj2.x + obj2.tamañoX && 
            obj1.x + obj1.tamañoX > obj2.x &&
            obj1.y < obj2.y + obj2.tamañoY &&
            obj1.y + obj1.tamañoY > obj2.y 
        ) {
            colision = true;
        }
        
        return colision;

    }

    

    document.addEventListener("keydown", activaMovimiento, false);
    document.addEventListener("keyup", desactivaMovimiento, false);

    fondo = document.getElementById("fondo");
    frente = document.getElementById("frente");

    ctxFondo = fondo.getContext("2d");
    ctxFrente = frente.getContext("2d");

    let protagonista = new Personaje();
    let plataformas = [
        new Plataforma(400, 800, 100, 140),
        new Plataforma(600, 700, 250, 45),
        new Plataforma(850, 180, 80, 770),
        new Plataforma(0, 600, 505, 45),
        new Plataforma(460, 546, 45, 60),
        new Plataforma(0, 325, 505, 45),
        new Plataforma(0, 180, 600, 45)
    ]
    
    fondoNivel1();

    idPersonaje = setInterval(moverPersonaje,1);

}


