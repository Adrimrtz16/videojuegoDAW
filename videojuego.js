let protagonista = new Personaje();
let elemntoAnimado = new Hoguera();
let textoShovelKnightMision = new BocadilloComic(75,300,18);
let textoShovelKnightGracias = new BocadilloComic(75,300,8);

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


// Variables de incio de nivel
let nivel1Completado = false;
let nivel2Completado = false;

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
        protagonista.aterrizado = false;
        plataformas.forEach(plataforma => {     
            plataforma.personajeCayendo();
        });
    }
    
    ctxFrente.clearRect(0, 0, 1920, 1080);

    protagonista.pintarPersonaje();

    //lógica de los niveles
    if(!nivel1Completado) {
        nivel1();
    } else if (!nivel2Completado) {
        nivel2();
    } 

}

function activaMovimiento(evt) {
    
    switch (evt.keyCode) {
        case 37:
        case 65:
            xIzquierda = true;
            break;
        case 39:
        case 68:
            xDerecha = true;
            break;
        case 40:
        case 16:
        case 83:
            correr = true;
            break;
        case 87:
        case 38:
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
        case 37:
        case 65:
            xIzquierda = false;
            protagonista.estadoDeLaAnimacion = 1
            break;
        case 39:
        case 68:
            xDerecha = false;
            protagonista.estadoDeLaAnimacion = 1
            break;
        case 40:
        case 16:
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

ctxFrente.imageSmoothingEnabled = false;
ctxFondo.imageSmoothingEnabled = false;







