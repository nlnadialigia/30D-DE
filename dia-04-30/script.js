const modalOverlay = document.querySelector('.modal-overlay')
const card = document.querySelector('.card')


card.addEventListener('click', function () {
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe')
})
    
document.querySelector('.close-modal').addEventListener('click',()=>{
    modalOverlay.classList.remove('active')
})