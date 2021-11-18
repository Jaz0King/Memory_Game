import {reScore} from "./app.js";
//Pintar cartas dinámicamente en la "mesa" de juego
let memorama = document.getElementById("mesa");

//Traer la data de las cartas, del documento .json
export let reStart = () => {
    memorama.innerHTML = "";
    reScore()
    fetch("../data/memory.json")
    .then((response) => response.json())
    .then((data) => iterarCartas(data))
    .catch((err) => console.log(err))
}

reStart();

//Se iteran las cartas para pintarse dinámicamente
let iterarCartas = (data) => {
    console.log(data.Memorama)
    //Las cartas se revuelven cada que se carga el juego
    data.Memorama.sort(() => Math.random() - 0.5);                                     
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








