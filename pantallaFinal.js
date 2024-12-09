let ecuacionPuntuacion;
let puntuacionIntento= [];

let puntuacionFinal = JSON.parse(localStorage.getItem('puntuacionFinal')) || [];


function almacenarPuntosEnLocalStorage(puntuacionFinal) {
    localStorage.setItem('puntuacionFinal', JSON.stringify(puntuacionFinal));
}

function actualizarPuntuacion(nuevaPuntuacion) {
    puntuacionFinal.push(nuevaPuntuacion);
    almacenarPuntosEnLocalStorage(puntuacionFinal);
}

function finalizarIntento(puntuacion) {
    actualizarPuntuacion(puntuacion);
    puntuacionFinal.sort((a, b) => b[3] - a[3]);
}


function iniciarNivelPantallaFinal() {
    
    ecuacionPuntuacion = puntuacion - contadorDeMuertes * 5 - segundos * 0.5;
    let intento = [puntuacion, contadorDeMuertes, segundos, ecuacionPuntuacion];
    puntuacionIntento.push(intento);
    finalizarIntento(intento);
    
    audOutro.currentTime = 0;
    audOutro.volume = 0.2;
    audOutro.play();

    document.body.innerHTML = `
    <table class="puntuaciones">
        <tr>
            <th>Niveles</th>
            <th>Muertes</th>
            <th>Tiempo</th>
            <th>Puntuación</th>
        </tr>
        ${puntuacionFinal.slice(0, 3).map(puntuacion => `
        <tr>
            <td>${puntuacion[0]}</td>
            <td>${puntuacion[1]}</td>
            <td>${puntuacion[2]}</td>
            <td>${puntuacion[3]}</td>
        </tr>
        `).join('')}
    </table>

    <div class="container">
        <a class="button" href="#" style="--color: #ff18cd;" id="botonRestart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Jugar Otra Vez
        </a>
      </div>
    `;

    document.getElementById('botonRestart').onclick = function(event) {

        event.preventDefault(); 
        
        coleccionable1Cogido = false;
        misionNivel1 = false;
        recompensaReclamada1 = false;
        mostrandoTexto = false;
        textoDeGraciasShovel = true;
        graciasDadasShovel = false;
        iniciarMision1 = false;

        coleccionable2Cogido = false;
        misionNivel2 = false;
        recompensaReclamada2 = false;
        mostrandoTexto2 = false;
        textoDeGraciasMadeline = true;
        graciasDadasMadeline = false;
        iniciarMision2 = false;

        coleccionable3Cogido = false;
        misionNivel3 = false;
        recompensaReclamada3 = false;
        mostrandoTexto3 = false;
        textoDeGraciasTails = true;
        graciasDadasTails = false;
        iniciarMision3 = false;

        nivel1Completado = false;
        nivel2Completado = false;
        nivel3Completado = false;

        puntuacion = 0
        contadorDeMuertes = 0
        segundos = 0 
        ecuacionPuntuacion = 0;

        empezarJuego();
};
}


