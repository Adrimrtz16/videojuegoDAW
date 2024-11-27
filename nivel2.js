let plataformasNivel2 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 1024, 192),
    new Plataforma(1280, 768, 192, 64),
    new Plataforma(1600, 640, 192, 64),
    new Plataforma(1600, 448, 192, 64),

]

function fondoNivel2(){
    ctxFondo.drawImage(imgFondoNivel2, 0, 0, fondo.width, fondo.height);
    plataformasNivel2.forEach(plataforma => {
        ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
    });
}
