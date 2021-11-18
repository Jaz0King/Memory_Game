let click = false;    //Activación de animación con click
let turno = true;     //Turno de jugadores
let player1 = 0;      //Contador para puntuación de jugadores
let player2 = 0;
let carta1;
let id1;
let carta2;
let id2;  
let puntos1 = document.getElementById("puntos1")     //Pintado del score del jugador en el html
let puntos2 = document.getElementById("puntos2")
soundIntro()
                      //-----------//>Función para volvear las cartas<//------------ //
window.matchCards = {
    
        checkMatch:  (carta, Id) => { //booleano
            
            //voltear las cartas
            let flip = document.getElementById(Id + "_flip")
            flip.style.transform = "rotateY(180deg)";
            console.log(carta, Id)
                if (click == false){    //Definir el primer click a la carta                         
                    carta1 = carta     //Validar si el valor de la variable click es false, entonces es el primer click  
                    id1 = Id
                    click = true;
                }else{ 
                    carta2 = carta    //Definir el segundo click a la segunda carta 
                    id2 = Id
                    click = false;
                    if (carta1 == carta2 && id1 !== id2){
                        soundMatch()   //Si son iguales las cartas es Match
                        if(turno){       //Sumar puntos al jugador en turno
                            player1++;
                            document.getElementById("puntos1").innerHTML = player1; //Pintar puntuación en assaids de jugadores
                            comparar(player1, player2);
                        }else{
                            player2++;  
                            document.getElementById("puntos2").innerHTML = player2;
                            comparar(player1, player2);
                        }
                        alert("¡BIEN ECHO! Es un Match continúa tu turno");
                    }else{
                        soundNoMatch()
                        setTimeout(() => {
                        flip.style.transform = "";
                        alert("No son iguaes, cambio de turno");
                        let reflip = document.getElementById(id1 + "_flip") 
                        reflip.style.transform = "";
                        //console.log(carta, Id)
                        }, 1500);
                            if(turno){             //Cambiar turno del jugador si no hace match
                                turno = false;
                            }else{
                                turno = true;
                            }    
                    }
                } 
      }
}

export let reScore = () => {
    console.log(puntos1,puntos2)
    puntos1 = "";
    puntos2 = "";
    document.getElementById("puntos1").innerHTML = puntos1;
    document.getElementById("puntos2").innerHTML = puntos2;
}

//Función para activar los sonidos
//Sonido de No Match
    function soundMatch () {
        const audioMatch = document.getElementById("matchSound")
        audioMatch.volume = 0.3;
        audioMatch.play()
   }

//Sonido de No Match
    function soundNoMatch () {
        const audioNoMatch = document.getElementById("noMatchSound")
        audioNoMatch.volume = 0.3;
        audioNoMatch.play()
   }

//Sonido de Intro 
    function  soundIntro () {
        const audioFondo = document.getElementById("introSound")
        audioFondo.volume = 0.03;
        audioFondo.loop = true
        audioFondo.play()
    }
//Sonido Ganador
    function ganador () {
        const audioGanador = document.getElementById("ganaSound")
        audioGanador.volume = 0.5;
        audioGanador.play()
    }


   // Funcion para que aprezca un alert para el ganador 
    function comparar (puntos1, puntos2) {
        setTimeout(() => {
           if (puntos1 + puntos2 == 12) {
               if ( puntos1 > puntos2) {
                   ganador()
                   alert(`¡Felicidades!  ${document.getElementById("nombre1").value}, ¡Eres el mejor Duelista!`  )
             
               } else {
                   if (puntos1 < puntos2) {
                       ganador()
                       alert(`¡Felicidades!  ${document.getElementById("nombre2").value}, ¡Eres el mejor Duelista!`)
                       
                   }
               }
           }
        },500)
    }