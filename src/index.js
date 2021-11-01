const cards = document.querySelectorAll('#card');

function flipCard() {
    console.log('flipping');
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard));

