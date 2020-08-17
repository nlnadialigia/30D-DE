const cardBoard = document.querySelector('#cardboard')
const images = [
    'img01.png',
    'img02.png',
    'img03.png',
    'img04.png',
    'img05.png',
    'img06.png'
]

let cardHTML = ''

images.forEach(img => {
    cardHTML+= `
        <div class="memory-card" data-card="${img}">
            <img class="front-face" src="img/${img}">
            <img class="back-face" src="img/back.svg">
        </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML

const cards = document.querySelectorAll('.memory-card')
let firstCard, secondCard
let lockCard = false

function flipCard() {
    if(lockCard) return false
    this.classList.add('flip')
    this.removeEventListener("click", flipCard)

    if(!firstCard){
        firstCard = this

        return false
    }
    secondCard = this

    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card

    !isMatch ? disableCards(): resetCards(isMatch);
}

function disableCards() {
    lockCard = true
    setTimeout(()=> {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        firstCard.addEventListener("click", flipCard)
        secondCard.addEventListener("click", flipCard)

        resetCards()
    }, 1000)
}

(function shuffle(){
    cards.forEach(card =>{
        let rand = Math.floor(Math.random()*12)
        card.style.order = rand
    })
})()

function resetCards(isMatch = false) {
    if(isMatch){
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }
    firstCard = null
    secondCard = null
    lockCard = false
}

cards.forEach(card => card.addEventListener('click', flipCard))
