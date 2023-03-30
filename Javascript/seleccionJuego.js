let boton1Jugador = document.getElementById("boton-1-jugador");
let boton2Jugadores = document.getElementById("boton-2-jugadores");
let containerSeleccion = document.getElementById("seccionSeleccion");

boton1Jugador.addEventListener('click',e =>{
    containerSeleccion.classList.toggle("ocultar");
})

boton2Jugadores.addEventListener('click',e =>{
    containerSeleccion.classList.toggle("ocultar");
})