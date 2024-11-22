let protagonista = new Personaje();
let elemntoAnimado = new Hoguera();
let textoShovelKnight = new TextoShovel();

const topeDerecha = 1920-protagonista.tamañoX;
const topeIzquierda = 0;

let fondo, ctxFondo, frente, ctxFrente;
let xDerecha, xIzquierda, correr, saltar;

let mostrandoTexto = false;
let idIntervaloTextoShovel,intervaloColeccinable1;
let posicionY = 0;
let plataformas;

let coleccionable1Cogido = false

function moverPersonaje() {
    if(protagonista.y - protagonista.tamañoY > 1080) {
        protagonista.x = 120;
        protagonista.y = 896;
        coleccionable1Cogido = false;
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

    elemntoAnimado.pintarHoguera();

    if(colisionCompleta(protagonista,mensajeShovelKnight) && mostrandoTexto === false) {
        idIntervaloTextoShovel = setInterval(letrasTexto,100)
        mostrandoTexto = true;
    }

    if(colisionCompleta(protagonista,mensajeShovelKnight)) {
        textoShovelKnight.pintarTextoShovel();
        if(posicionTextoShovel === 17) {
            clearInterval(idIntervaloTextoShovel)
        }
    } else if (!colisionCompleta(protagonista,mensajeShovelKnight) && mostrandoTexto === true){
        mostrandoTexto = false;
        clearInterval(idIntervaloTextoShovel);
    }

    if (!coleccionable1Cogido) {
        if (!intervaloColeccinable1) { // Solo crea el intervalo si no existe uno activo
            intervaloColeccinable1 = setInterval(coleccionableOscilando, 50);
        }
        ctxFrente.drawImage(imgColeccionable1, 0, posicionY, fondo.width, fondo.height);
        if(colisionCompleta(protagonista,areaColeccinable1)){
            coleccionable1Cogido = true
        }
    } 
    ctxFrente.fillStyle = "#da3737";
    ctxFrente.fillRect(protagonista.x, protagonista.y, protagonista.tamañoX, protagonista.tamañoY);
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

document.addEventListener("keydown", activaMovimiento, false);
document.addEventListener("keyup", desactivaMovimiento, false);

fondo = document.getElementById("fondo");
frente = document.getElementById("frente");

ctxFondo = fondo.getContext("2d");
ctxFrente = frente.getContext("2d");

function iniciarJuego() {
    
    plataformas = plataformasNivel1;
    textoShovelKnight.imagen = imgTextoShovel;

    fondoNivel1();

    let idPersonaje = setInterval(moverPersonaje,16);  

    let idElementoAnimado = setInterval(fuegoHoguera,450)

}





