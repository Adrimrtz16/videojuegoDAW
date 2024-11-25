let protagonista = new Personaje();
let elemntoAnimado = new Hoguera();
let textoShovelKnightMision = new BocadilloComic(18);
let textoShovelKnightGracias = new BocadilloComic(8);

const topeDerecha = 1920-protagonista.tamañoX;
const topeIzquierda = 0;

let fondo, ctxFondo, frente, ctxFrente;
let xDerecha, xIzquierda, correr, saltar;

let posicionY = 0;
let plataformas;

let terminarNivel = false
let idPersonaje;  
let idSprite;
let idElementoAnimado;


// Variables para el nivel 1
let nivel1Completado = false;
let idIntervaloTextoShovel,intervaloColeccinable1;
let coleccionable1Cogido = false
let misionNivel1 = false;
let recompensaReclamada = false;
let mostrandoTexto = false;
let textoDeGraciasShovel = true
let graciasDadasShovel = false;
let iniciarMision = false;

function moverPersonaje() {
    if(protagonista.y - protagonista.tamañoY > 1080) {
        protagonista.x = 120;
        protagonista.y = 896;
        coleccionable1Cogido = false;
        misionNivel1 = false;
        recompensaReclamada = false;
        iniciarMision = false;
    }

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
        protagonista.aterrizado = false;
        plataformas.forEach(plataforma => {     
            plataforma.personajeCayendo();
        });
    }
    
    ctxFrente.clearRect(0, 0, 1920, 1080);

    // Programación del nivel 1
    if(!nivel1Completado) {

        elemntoAnimado.pintarHoguera();

        if(misionNivel1) {
            ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
            if(colisionCompleta(mensajeShovelKnight, protagonista)) {
                recompensaReclamada = true;
                misionNivel1 = false;
            }
        }
        if(!iniciarMision) {
            ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
        }

        if(colisionCompleta(protagonista,mensajeShovelKnight) && !mostrandoTexto && !recompensaReclamada) {
            idIntervaloTextoShovel = setInterval(() => textoShovelKnightMision.letrasTextoMision(), 100)
            mostrandoTexto = true;
            iniciarMision = true;
        }

        if(colisionCompleta(protagonista,mensajeShovelKnight) && !recompensaReclamada) {
            textoShovelKnightMision.pintarTextoShovel();
            if (textoShovelKnightMision.cambioDePosicion === 17) {
                clearInterval(idIntervaloTextoShovel);
            }
        } else if (!colisionCompleta(protagonista,mensajeShovelKnight) && mostrandoTexto){
            mostrandoTexto = false;
            clearInterval(idIntervaloTextoShovel);
        }

        if (!coleccionable1Cogido) {
            if (!intervaloColeccinable1) { // Solo crea el intervalo si no existe uno activo
                intervaloColeccinable1 = setInterval(coleccionableOscilando, 50);
            }
            ctxFrente.drawImage(imgColeccionable1, 0, posicionY, fondo.width, fondo.height);
            if(colisionCompleta(protagonista,areaColeccinable1)){
                coleccionable1Cogido = true;
                misionNivel1 = true;
                mostrandoTexto = false;
                iniciarMision = true;
            }
        }

        if(recompensaReclamada) {
            if(colisionCompleta(protagonista,mensajeShovelKnight)) {
                textoShovelKnightGracias.pintarTextoShovel();
                if(textoDeGraciasShovel){
                    idIntervaloTextoShovel = setInterval(() => textoShovelKnightGracias.letrasTextoMision(), 100)
                    textoDeGraciasShovel = false;
                }
            }

            if (textoShovelKnightGracias.cambioDePosicion === 7 && !graciasDadasShovel) {
                
                clearInterval(idIntervaloTextoShovel);
                graciasDadasShovel = true
                
            }
        }

        if(colisionCompleta(protagonista,areaFinalNivel1) && terminarNivel) {
            clearInterval(idElementoAnimado);
            nivel1Completado = true;
            plataformas = [];
            iniciarNivel2();
        }

    } 
    // Fin de la programación del nivel 1

    protagonista.pintarPersonaje();
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
                protagonista.velocidadCaida = 13
                saltar = true;                 
            }
            break;
        case 13:
            terminarNivel = true;
            break;
    }
}

function desactivaMovimiento(evt) {

    switch (evt.keyCode) {
        case 65:
            xIzquierda = false;
            protagonista.estadoDeLaAnimacion = 1
            break;
        case 68:
            xDerecha = false;
            protagonista.estadoDeLaAnimacion = 1
            break;
        case 83:
            correr = false;
            protagonista.personajeAndando();
            break;
        case 13:
            terminarNivel = false;
            break;
    }
}

document.addEventListener("keydown", activaMovimiento, false);
document.addEventListener("keyup", desactivaMovimiento, false);

fondo = document.getElementById("fondo");
frente = document.getElementById("frente");

ctxFondo = fondo.getContext("2d");
ctxFrente = frente.getContext("2d");

function iniciarNivel1() {
    
    plataformas = plataformasNivel1;
    textoShovelKnightMision.imagen = imgTextoShovel;
    textoShovelKnightGracias.imagen = imgGraciasShovel;

    fondoNivel1();

    idPersonaje = setInterval(moverPersonaje,16);  
    idSprite = setInterval(posicionDelProtagonista, 200);
    idElementoAnimado = setInterval(fuegoHoguera,450)

}

function iniciarNivel2() {
    fondoNivel2();
    idPersonaje = setInterval(moverPersonaje,16);  
    idSprite = setInterval(posicionDelProtagonista, 200);
}





