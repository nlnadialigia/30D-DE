const left = document.querySelector('.face-left')
const right = document.querySelector('.face-right')
const front = document.querySelector('.face-front')
const back = document.querySelector('.face-back')
const modalLeft = document.querySelector('.left')
const modalRight = document.querySelector('.right')
const modalFront = document.querySelector('.front')
const modalBack = document.querySelector('.back')

left.addEventListener("click", ()=>{
    modalLeft.classList.add('active')
})

modalLeft.addEventListener("click", ()=>{
    modalLeft.classList.remove('active')
})

right.addEventListener("click", ()=>{
    modalRight.classList.add('active')
})

modalRight.addEventListener("click", ()=>{
    modalRight.classList.remove('active')
})

front.addEventListener("click", ()=>{
    modalFront.classList.add('active')
})

modalFront.addEventListener("click", ()=>{
    modalFront.classList.remove('active')
})

back.addEventListener("click", ()=>{
    modalBack.classList.add('active')
})

modalBack.addEventListener("click", ()=>{
    modalBack.classList.remove('active')
})



