// When the "card" is make the bellow CSS code active:
/* .card:active {
  transform: perspective(400px) rotateY(180deg);
} */




// when the div with the class card is clicked, the class is-flipped is toggled
// the class is-flipped is defined in the css file and it rotates the card 180 degrees


function flipCard() {
    var card = document.querySelector('.card');
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
    }


flipCard();