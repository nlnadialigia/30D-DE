const modalOverlay = document.querySelector('.modal')
const gameStart = document.querySelector('#game')
const newGame = document.querySelector(".restart")

modalOverlay.addEventListener('click', function () {
    gameStart.classList.remove('active')
})


newGame.addEventListener('click', function () {
    cards.forEach(card => card.classList.remove('flip'))
    gameStart.classList.add('active')
    document.getElementById('id03').style.display='block'
})


