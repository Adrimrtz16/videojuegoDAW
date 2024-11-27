let plataformasNivel2 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 320, 192),
    new Plataforma(640, 960, 384, 192),
    new Plataforma(1280, 832, 192, 64),
    new Plataforma(1600, 640, 192, 64),
    new Plataforma(1600, 448, 192, 64),
    new Plataforma(1600, 256, 192, 64),
    new Plataforma(1024, 128, 192, 64),
    new Plataforma(0, 576, 1280, 128),
    new Plataforma(896, 0, 64, 320),
    new Plataforma(448, 320, 192, 64),
    new Plataforma(128, 256, 192, 64),
]

function fondoNivel2(){
    ctxFondo.drawImage(imgFondoNivel2, 0, 0, fondo.width+75, fondo.height+75);
    imgPlataformasNivel2
    // plataformasNivel2.forEach(plataforma => {
    //     ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
    // });
    ctxFondo.drawImage(imgPlataformasNivel2, 0, 0, fondo.width, fondo.height);
}
