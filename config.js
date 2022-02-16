let obtenerMensaje = document.getElementById("mensaje");
let mostrarMensaje = document.getElementById("mostrarMensaje");

obtenerMensaje.addEventListener("click", ()=>{
    mostrarMensaje.innerHTML = "Hola mundo, estamos aprendiendo Git y Github";
});