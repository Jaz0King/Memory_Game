
//Traer la data de las cartas, del documento .json
fetch("../data/memory.json")
.then((response) => response.json())
.then((data) => iterarCartas(data))
.catch((err) => console.log(err))

//Pintar cartas dinámicamente en la "mesa" de juego
let memorama = document.getElementById("mesa");
//Se iteran las cartas para pintarse dinámicamente
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

let click = false;    //Activación de animación con click
let turno = true;     //Turnos de jugadores
let player1 = 0;      //Contadores para score de jugadores
let player2 = 0;
let carta1;
let id1;
let carta2;
let id2;

window.matchCards = {
        checkMatch:  (carta, Id) => { //booleano
            //voltear las cartas
            let flip = document.getElementById(Id + "_flip")
            flip.style.transform = "rotateY(180deg)";
            console.log(carta, Id)
    
            //Definir el primer click a la carta 
                //Validar si el valor de la variable click es false, entonces es el primer click

                if (click == false) {               //Si el valor del click es True, entonces es el segundo click
                   //alert("primer click");
                        carta1 = carta
                        id1 = Id
                        click = true;
                }else{ 
                    //alert("segundo click"); //Definir el segundo click a la segunda carta
                         carta2 = carta   //comparar las dos cartas
                         id2 = Id
                         click = false;
                         if (carta1 == carta2 && id1 !== id2){ //Si son iguales las cartas es Match
                             //alert("Match");
                             if(turno){
                                 player1++;
                             }else{
                                 player2++;  
                             }
                             console.log(player1, player2);
                         }else{
                             setTimeout(() => {
                                flip.style.transform = "";
                             //alert("No Match");
                             let reflip = document.getElementById(id1 + "_flip") 
                                reflip.style.transform = "";
                                console.log(carta, Id)
                             }, 1500);

                            if(turno){
                                turno = false;
                            }else{
                                turno = true;
                            }    
                         }
                } 
      }
}


