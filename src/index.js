<<<<<<< HEAD

//Traer la data de las cartas, del documento .json
fetch("../data/memory.json")
.then((response) => response.json())
.then((data) => iterarCartas(data))
.catch((err) => console.log(err))

//Pintar cartas dinámicamente en la "mesa" de juego
let memorama = document.getElementById("mesa");

//Se iteran las cartas para pintarse dinámicamente en el HTML
let iterarCartas = (data) => {
    console.log(data.Memorama)
    for (const tarjeta of data.Memorama) {
        //console.log(tarjeta.Id)
        memorama.innerHTML += `<div class="card-container">
        <div class="card-portrait" onclick="checkClick('${tarjeta.carta}','${tarjeta.Id}')" id="${tarjeta.Id}_flip">
        <div class="back" id='${tarjeta.Id}'></div>
        <div class="front"></div>
        </div>
        </div>`;

    let caraURL = tarjeta.cara
    let portadaCard = document.getElementById(`${tarjeta.Id}`)
    portadaCard.style.backgroundImage = "url(" + caraURL + ")"
    portadaCard.style.backgroundSize = "cover"
    }
}

//Función para volvear cartas

//-----------//> Eventos DOM. Obtener los valores de búsqueda para procesarlos en app.js <//------------ //

let click = false;    //variable para activar y desactivar la animación de volteo
let carta1;           //variable de la carta volteada
let carta2;     
let id1;               //id de la carta volteada para coprovar match
let id2;         
let turno = true;         //contador de turnos para los jugadores
let contadorTurno = 0;     //contador
let player1 = 0; 
let player2 = 0;
let playerID = null;

=======
//-----------//> Eventos DOM. Obtener los valores de búsqueda para procesarlos en data.js <//------------ //
let click = false;    //Activación de animación con click
let turno = true;     //Turno de jugadores
let player1 = 0;      //Contador para puntuación de jugadores
let player2 = 0;
let carta1;
let id1;
let carta2;
let id2;
let jugador1 = document.getElementById("jugador1")   //Pintado de los nombres del jugador en el html
let jugador2 = document.getElementById("jugador2")
let puntos1 = document.getElementById("puntos1")
let puntos2 = document.getElementById("puntos2")
>>>>>>> 79b60528e5dfed6a3b274f23fd3cbd6be069c405

                      //-----------//>Función para volvear las cartas<//------------ //
window.matchCards = {
        checkMatch:  (carta, Id) => { //booleano
            //voltear las cartas
            let flip = document.getElementById(Id + "_flip")
            flip.style.transform = "rotateY(180deg)";
            console.log(carta, Id)
<<<<<<< HEAD
    
            //Definir el primer click a la carta 
                //Validar si el valor de la variable click es false, entonces es el primer click

                if (click == false) {  //Si el valor del click es True, entonces es el segundo click
                
                        carta1 = carta
                        id1 = Id
                        click = true;
                       

                } else { 
                    //alert("segundo click"); //Definir el segundo click a la segunda carta
                         carta2 = carta   //comparar las dos cartas
                         id2 = Id
                         click = false;
                         


                         if (carta1 == carta2 && id1 !== id2){ //Si son iguales las cartas es Match
                           
                           // contadorTurno ++;
                            if (turno){
                                player1 ++;
                            }else{
                                player2 ++;
                            }
                            console.log(player1, player2);
                           
                            /*
                            if(playerID === 1){
                                player1 ++;
                                console.log(player1 + " player1")
                            }else{
                                player2 ++;
                                console.log(player2 + " player2")
                            }
                            */
                            
                            alert("Match");
                            
                         }else{
                             setTimeout(() => {
                                flip.style.transform = "";
                             alert("No Match");
                             let reflip = document.getElementById(id1 + "_flip") 
                                reflip.style.transform = "";
                                //contadorTurno ++;
                                
                                if (turno){
                                    turno = false;
                                }else{
                                    turno = true;
                                }
                                
                                console.log(carta, Id,)
                             }, 1500);    
                         }
                }
            
=======
                if (click == false){    //Definir el primer click a la carta                         
                    carta1 = carta     //Validar si el valor de la variable click es false, entonces es el primer click  
                    id1 = Id
                    click = true;
                }else{ 
                    carta2 = carta    //Definir el segundo click a la segunda carta 
                    id2 = Id
                    click = false;
                    if (carta1 == carta2 && id1 !== id2){   //Si son iguales las cartas es Match
                        if(turno){       //Sumar puntos al jugador en turno
                            player1++;
                            document.getElementById("jugador1").innerHTML = player1; //Pintar puntuación en assaids de jugadores
                        }else{
                            player2++;  
                            document.getElementById("jugador2").innerHTML = player2;
                        }
                        alert("Match");
                        //console.log(player1, player2);
                    }else{
                        setTimeout(() => {
                        flip.style.transform = "";
                        alert("No Match");
                        let reflip = document.getElementById(id1 + "_flip") 
                        reflip.style.transform = "";
                        //console.log(carta, Id)
                        }, 1500);
                            if(turno){          //Cambiar turno del jugador si no hace match
                                turno = false;
                            }else{
                                turno = true;
                            }    
                    }
                } 
>>>>>>> 79b60528e5dfed6a3b274f23fd3cbd6be069c405
      }
}
                     //-----------//>Función para cambiar de pantalla de bienvenida<//-----------//
document.getElementById("game").hidden= true;      //Pantalla de Bienvenida se muestra al cargar la página

let entrar = document.getElementById("btnInicio")  //La pantalla de Bienvenida se oculta al dar "click" al botón y se muestra el juego
entrar.addEventListener("click", () => {
    document.getElementById("bienvenida").hidden = true
    document.getElementById("game").hidden = false
    jugador1.innerHTML = "Jugador 1 : " + document.getElementById("nombre1").value 
    jugador2.innerHTML = "Jugador 2 : " + document.getElementById("nombre2").value 
   
})







/*
turnoJugador = function(){
    if (turnoJugador %2 === 0){
        playerID = 1;
    }else{
        playerID = 2;
        console.log(playerID)
    }
};
*/
