
//Traer la data de las cartas, del documento .json
fetch("../data/memory.json")
.then((response) => response.json())
.then((data) => iterarCartas(data))
.catch((err) => console.log(err))

//Pintar cartas dinámicamente en la "mesa" de juego
let memorama = document.getElementById("mesa");
//Se iteran las cartas
let iterarCartas = (data) => {
    console.log(data.Memorama)
    for (const tarjeta of data.Memorama) {
        console.log(tarjeta.carta)
        memorama.innerHTML += `<div class="card-container">
        <div class="card-portrait" id="card">
        <div class="front" id='${tarjeta.carta}'></div>
        <div class="back"></div>
        </div>
        </div>`;

    let caraURL = tarjeta.cara
    let portadaCard = document.getElementById(`${tarjeta.carta}`)
    portadaCard.style.backgroundImage = "url(" + caraURL + ")"
    portadaCard.style.backgroundSize = "cover"
    }
}




