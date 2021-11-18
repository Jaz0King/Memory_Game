//-----------//> Eventos DOM. Obtener los valores de búsqueda para procesarlos en data.js <//------------ //
import {reStart} from "./data.js";


let jugador1 = document.getElementById("jugador1")   //Pintado de los nombres del jugador en el html
let jugador2 = document.getElementById("jugador2") 


                         //-----------//>Función para cambiar de pantalla de bienvenida<//-----------//
                         
document.getElementById("game").hidden= true;      //Pantalla de Bienvenida se muestra al cargar la página
let entrar = document.getElementById("btnInicio")  //La pantalla de Bienvenida se oculta al dar "click" al botón y se muestra el juego
entrar.addEventListener("click", () => {
    document.getElementById("bienvenida").hidden = true
    document.getElementById("game").hidden = false
    jugador1.innerHTML = "Jugador 1 : " + document.getElementById("nombre1").value 
    jugador2.innerHTML = "Jugador 2 : " + document.getElementById("nombre2").value 
})
 

let reiniciar = document.getElementById("reiniciar")
console.log(reiniciar);
reiniciar.addEventListener("click", () => {
   reStart(); 
}) 

let iniciar = document.getElementById("inicio")
console.log(iniciar);
iniciar.addEventListener("click", () => {
   location.reload(); 
}) 





