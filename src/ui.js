import { imgBack, puntaje, setPuntaje, intentos, setIntentos } from "./modelo.js"
import { spanPuntos, spanIntentos, imgCarta, divCartas } from "./elementos.js"
import { obtenerNumRandom, obtenerNumCarta, obtenerUrlCarta, obtenerPuntosCarta, sumarPuntos, mensajeMePlanto } from "./motor.js";

export function inicializar(){
    setPuntaje(0);
    muestraPunt(puntaje);
    divCartas.innerHTML = "";
    muestraIntentos(intentos);
}

function muestraPunt(punt){
    spanPuntos.innerText = punt;
}

function muestraIntentos(inten){
    setIntentos(inten);
    spanIntentos.innerText = inten;
}

function mostrarUrlCarta(url){
    imgCarta.src = url;
    divCartas.innerHTML += `<img src="${url}" alt="Imagen No Encontrada">`;
    setTimeout(() => {
        imgCarta.src = imgBack;
    }, 700);  // 700 milisegundos = 0.7 segundos
}

export function revisarPartida(punt, int){
    let mensaje;
    if (punt > 7.5){
        mensaje = `Game Over, tu puntaje es de ${punt}...`;
    } else if (punt === 7.5){
        mensaje = partidaGanada();
    } else if (punt < 7.5){
        mensaje = "Sigue jugando";
    }

    return mensaje;
}

function partidaGanada(){
    let mensaje;

    if (intentos === 0){setIntentos(1);}
    if (intentos === 1){
        mensaje = `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intento para ganar la partida.`;
    } else {
        mensaje = `¡Lo has clavado! ¡Enhorabuena! Has necesitado de ${intentos} intentos para ganar la partida.`;
    }

    return mensaje;
}

export function dameCarta(){
    //console.log(numCarta);
    //obtenerUrlCarta(obtenerNumCarta(obtenerNumRandom()));
    const carta = obtenerNumCarta(obtenerNumRandom());
    const urlCarta = obtenerUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    const punto = obtenerPuntosCarta(carta);
    sumarPuntos(punto);
    muestraPunt(puntaje);
    if (revisarPartida(puntaje, intentos) !== "Sigue jugando"){
        alert(revisarPartida(puntaje, intentos));
        if (puntaje > 7.5) {
            setIntentos(parseInt(intentos) + 1);
            inicializar();
        } else if (puntaje === 7.5){
            setIntentos(0);
        }
    }
    console.log(revisarPartida(puntaje, intentos), puntaje, intentos)
}

export function mePlanto(){
    //console.log(puntaje);
    alert(mensajeMePlanto());
    if (puntaje === 7.5){setIntentos(0);}
    inicializar();
}