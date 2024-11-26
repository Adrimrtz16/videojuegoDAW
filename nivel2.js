let plataformasNivel2 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 1024, 192),
    new Plataforma(1280, 768, 192, 64),
    new Plataforma(1152, 640, 192, 64),
    new Plataforma(896, 512, 256, 64),
    new Plataforma(640, 384, 256, 64),
    new Plataforma(384, 256, 256, 64),
    new Plataforma(128, 128, 256, 64),
    new Plataforma(512, 0, 512, 128),
    new Plataforma(768, 128, 256, 64),
    new Plataforma(1024, 192, 256, 64),
    new Plataforma(1408, 320, 256, 64),
    new Plataforma(1664, 448, 256, 64),
]

function fondoNivel2(){
    ctxFondo.drawImage(imgFondoNivel2, 0, 0, fondo.width, fondo.height);
    plataformasNivel2.forEach(plataforma => {
        ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
    });
}
