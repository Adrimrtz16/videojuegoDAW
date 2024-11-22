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