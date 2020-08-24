let step=0
let number
const modal = document.querySelector('.modal')
const body=document.querySelector('body')
const input = document.querySelector('#input')

document.querySelector('button').onclick = function () {
    step=step+1
    game(step)
}

function instructor(which) {
    document.querySelector('#message').innerHTML=which
}

function game(step) {
    console.log(step);
    if (step===1) {
        instructor('Você deve advinhar o número que vou pensar...')
    }else if (step===2) {
        instructor('Estou pensando em um número de 1 a 50!')
        number = Math.floor(Math.random()*50)+1
        console.log(number);
    }else if (step===3) {
        instructor('Tente advinhar o número!')
        input.setAttribute("style","display: block;")
    }else {
        let attempt = input.value
        if (attempt==number) {
            instructor('Parabéns! Você acertou')
            body.setAttribute("style", "height: 30rem;")
            modal.setAttribute("style", "display: block;")
        }else if (attempt<number) {
            instructor('Seu número é muito baixo...')
        }else if (attempt>number) {            
            instructor('Seu número é muito alto...')
        }
    }
}

modal.addEventListener('click', function () {
    body.setAttribute("style", "height: auto;")
    modal.setAttribute("style", "display: none;")
    instructor('Olá')
    step=0
    input.value = ''
    input.setAttribute("style", "display: none;")
})


