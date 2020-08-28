let choice = document.querySelectorAll('.color')

let color = document.getElementById('board')


for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', function () {
        switch (i) {
            case 0:
                color.style.backgroundColor = "red"
            break;
            case 1:
                color.style.backgroundColor = "blue"
            break;
            case 2:
                color.style.backgroundColor = "yellow"
            break
            case 3:
                color.style.backgroundColor = "black"
            break
            case 4:
                color.style.backgroundColor = "green"
            break
            default:
                color.style.backgroundColor = "purple"
            break;
        } 
    })
}
