const btnPulsado = (e, pos) => {
  if (turno <9 && finJuego != true) {
    let circulo = document.createElement("div");
    circulo.classList.add("circulo");
    let cruz = document.createElement("div");
    cruz.classList.add("cruz");
    const btn = e.target;
    turno++;
    if (turno % 2 === 0) {
      btn.appendChild(cruz);
      tableroMatriz[pos] = "X";
    } else {
      btn.appendChild(circulo);
      tableroMatriz[pos] = "O";
    }
    finJuego = ganador(tableroMatriz);
  }
};

let finJuego = false;
let jGanador;
let tableroMatriz = [];
let turno = 0;
let tablero = document.querySelectorAll("td");
let mensaje = document.querySelector(".mensaje");
let botonVolver = document.getElementById("boton-volver");
tablero.forEach((obj, i) =>
  obj.addEventListener("click", (e) => btnPulsado(e, i))
);
botonVolver.addEventListener('click', e =>{
    location.reload();
})


const ganador = (tm) =>{
    if(tm[0] == 'O' && tm[1] == 'O' && tm[2] == 'O'){
        mensaje.innerHTML = `Ha ganado el Jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[3] == 'O' && tm[4] == 'O' && tm[5] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[6] == 'O' && tm[7] == 'O' && tm[8] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[0] == 'O' && tm[3] == 'O' && tm[6] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[1] == 'O' && tm[4] == 'O' && tm[7] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[2] == 'O' && tm[5] == 'O' && tm[8] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[0] == 'O' && tm[4] == 'O' && tm[8] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[2] == 'O' && tm[4] == 'O' && tm[6] == 'O'){
        mensaje.innerHTML = `Ha ganado el jugador 1`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    //Cheque ganador con x
    if(tm[0] == 'X' && tm[1] == 'X' && tm[2] == 'X'){
        mensaje.innerHTML = `Ha ganado el Jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[3] == 'X' && tm[4] == 'X' && tm[5] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[6] == 'X' && tm[7] == 'X' && tm[8] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[0] == 'X' && tm[3] == 'X' && tm[6] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[1] == 'X' && tm[4] == 'X' && tm[7] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[2] == 'X' && tm[5] == 'X' && tm[8] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        return true;
    }
    if(tm[0] == 'X' && tm[4] == 'X' && tm[8] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
    if(tm[2] == 'X' && tm[4] == 'X' && tm[6] == 'X'){
        mensaje.innerHTML = `Ha ganado el jugador 2`;
        botonVolver.classList.toggle("ocultar");
        return true;
    }
}

