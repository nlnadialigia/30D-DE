let game = [] 
let board = [] 
let whoPlay = 0; 
let check
let playing=true
let level=2
let cpuMove=1
let whoStart=1
let move=0

function playCPU() {
    if (playing) {
        let l,c
        if (level==1) {
           do{
            l=Math.round(Math.random()*2)
            c=Math.round(Math.random()*2)
           }while (game[l][c]!="") {
               game[l][c]="O"
           }
        }else if (level==2) {
            //ATAQUE
            //linhas  
            if ((game[0][0]=="O")&&(game[0][1]=="O")&&(game[0][2]=="")) {
                game[0][2]="O"
            }else if ((game[0][0]=="O")&&(game[0][2]=="O")&&(game[0][1]=="")) {
                game[0][1]="O"
            }else if ((game[0][1]=="O")&&(game[0][2]=="O")&&(game[0][0]=="")) {
                game[0][0]="O"
            }else
            if ((game[1][0]=="O")&&(game[1][1]=="O")&&(game[1][2]=="")) {
                game[1][2]="O"
            }else if ((game[1][0]=="O")&&(game[1][2]=="O")&&(game[1][1]=="")) {
                game[1][1]="O"
            }else if ((game[1][1]=="O")&&(game[1][2]=="O")&&(game[1][0]=="")) {
                game[1][0]="O"
            }else
            if ((game[2][0]=="O")&&(game[2][1]=="O")&&(game[2][2]=="")) {
                game[2][2]="O"
            }else if ((game[2][0]=="O")&&(game[2][2]=="O")&&(game[2][1]=="")) {
                game[2][1]="O"
            }else if ((game[2][1]=="O")&&(game[2][2]=="O")&&(game[2][0]=="")) {
                game[2][0]="O"
            }else
            //colunas
            if ((game[0][0]=="O")&&(game[1][0]=="O")&&(game[2][0]=="")) {
                game[2][0]="O"
            }else if ((game[0][0]=="O")&&(game[2][0]=="O")&&(game[1][0]=="")) {
                game[1][0]="O"
            }else if ((game[1][0]=="O")&&(game[2][0]=="O")&&(game[0][0]=="")) {
                game[0][0]="O"
            }else
            if ((game[0][1]=="O")&&(game[1][1]=="O")&&(game[2][1]=="")) {
                game[2][1]="O"
            }else if ((game[0][1]=="O")&&(game[2][1]=="O")&&(game[1][1]=="")) {
                game[1][1]="O"
            }else if ((game[1][1]=="O")&&(game[2][1]=="O")&&(game[0][1]=="")) {
                game[0][1]="O"
            }else
            if ((game[0][2]=="O")&&(game[1][2]=="O")&&(game[2][2]=="")) {
                game[2][2]="O"
            }else if ((game[0][2]=="O")&&(game[2][2]=="O")&&(game[1][2]=="")) {
                game[1][2]="O"
            }else if ((game[1][2]=="O")&&(game[2][2]=="O")&&(game[0][2]=="")) {
                game[0][2]="O"
            }else
            //diagonal 1
            if ((game[0][0]=="O")&&(game[1][1]=="O")&&(game[2][2]=="")) {
                game[2][2]
            }else if ((game[0][0]=="O")&&(game[2][2]=="O")&&(game[1][1]=="")) {
                game[1][1]
            }else if ((game[2][2]=="O")&&(game[1][1]=="O")&&(game[0][0]=="")) {
                game[0][0]
            }else
            //diagonal 2
            if ((game[0][2]=="O")&&(game[1][1]=="O")&&(game[2][0]=="")) {
                game[2][0]
            }else if ((game[0][2]=="O")&&(game[2][0]=="O")&&(game[1][1]=="")) {
                game[1][1]
            }else if ((game[2][0]=="O")&&(game[1][1]=="O")&&(game[0][2]=="")) {
                game[0][2]
            }else
        
            //DEFESA
            //linhas
            if ((game[0][0]=="X")&&(game[0][1]=="X")&&(game[0][2]=="")) {
                game[0][2]="O"
            }else if ((game[0][0]=="X")&&(game[0][2]=="X")&&(game[0][1]=="")) {
                game[0][1]="O"
            }else if ((game[0][1]=="X")&&(game[0][2]=="X")&&(game[0][0]=="")) {
                game[0][0]="O"
            }else
            if ((game[1][0]=="X")&&(game[1][1]=="X")&&(game[1][2]=="")) {
                game[1][2]="O"
            }else if ((game[1][0]=="X")&&(game[1][2]=="X")&&(game[1][1]=="")) {
                game[1][1]="O"
            }else if ((game[1][1]=="X")&&(game[1][2]=="X")&&(game[1][0]=="")) {
                game[1][0]="O"
            }else
            if ((game[2][0]=="X")&&(game[2][1]=="X")&&(game[2][2]=="")) {
                game[2][2]="O"
            }else if ((game[2][0]=="X")&&(game[2][2]=="X")&&(game[2][1]=="")) {
                game[2][1]="O"
            }else if ((game[2][1]=="X")&&(game[2][2]=="X")&&(game[2][0]=="")) {
                game[2][0]="O"
            }else
            //colunas
            if ((game[0][0]=="X")&&(game[1][0]=="X")&&(game[2][0]=="")) {
                game[2][0]="O"
            }else if ((game[0][0]=="X")&&(game[2][0]=="X")&&(game[1][0]=="")) {
                game[1][0]="O"
            }else if ((game[1][0]=="X")&&(game[2][0]=="X")&&(game[0][0]=="")) {
                game[0][0]="O"
            }else
            if ((game[0][1]=="X")&&(game[1][1]=="X")&&(game[2][1]=="")) {
                game[2][1]="O"
            }else if ((game[0][1]=="X")&&(game[2][1]=="X")&&(game[1][1]=="")) {
                game[1][1]="O"
            }else if ((game[1][1]=="X")&&(game[2][1]=="X")&&(game[0][1]=="")) {
                game[0][1]="O"
            }else
            if ((game[0][2]=="X")&&(game[1][2]=="X")&&(game[2][2]=="")) {
                game[2][2]="O"
            }else if ((game[0][2]=="X")&&(game[2][2]=="X")&&(game[1][2]=="")) {
                game[1][2]="O"
            }else if ((game[1][2]=="X")&&(game[2][2]=="X")&&(game[0][2]=="")) {
                game[0][2]="O"
            }else
            //diagonal 1
            if ((game[0][0]=="X")&&(game[1][1]=="X")&&(game[2][2]=="")) {
                game[2][2]
            }else if ((game[0][0]=="X")&&(game[2][2]=="X")&&(game[1][1]=="")) {
                game[1][1]
            }else if ((game[2][2]=="X")&&(game[1][1]=="X")&&(game[0][0]=="")) {
                game[0][0]
            }else
            //diagonal 2
            if ((game[0][2]=="X")&&(game[1][1]=="X")&&(game[2][0]=="")) {
                game[2][0]
            }else if ((game[0][2]=="X")&&(game[2][0]=="X")&&(game[1][1]=="")) {
                game[1][1]
            }else if ((game[2][0]=="X")&&(game[1][1]=="X")&&(game[0][2]=="")) {
                game[0][2]
            }else
            if (move<8) {
                do{
                    l=Math.round(Math.random()*2)
                    c=Math.round(Math.random()*2)
                   }while (game[l][c]!="") {
                       game[l][c]="O"
                   }
            } else {
                for (let l = 0; l < 3; l++) {
                    for (let c = 0; c < 3; c++) {
                        if (game[l][c]=="") {
                            game[l][c]="O"
                        }
                    }
                }
            }
        }
        check=checkVictory()
        
        if (check!="") {
            alert(check+" VENCEU")
            playing=false
        }
        updateBoard()
        move++
        whoPlay=0
        
    }
}

function checkVictory() {
    let l,c
    //linhas
    for(l=0;l<3;l++){
        if((game[l][0]==game[l][1])&&(game[l][1]==game[l][2])){
            return game[l][0]
        }
    }
    //colunas
    for(c=0;c<3;c++){
        if((game[0][c]==game[1][c])&&(game[1][c]==game[2][c])){
            return game[0][c]
        }
    }

    //diagonais
    if((game[0][0]==game[1][1])&&(game[1][1]==game[2][2])){
        return game[0][0]
    }

    if((game[0][2]==game[1][1])&&(game[1][1]==game[2][0])){
        return game[0][0]
    }
    return ""
}

function play(p) {
    if (playing && whoPlay==0) {
        switch (p) {
            case 1:
                if (game[0][0]=="") {
                    game[0][0]="X"
                    whoPlay=1
                }
                break;
            case 2:
                if (game[0][1]=="") {
                    game[0][1]="X"
                    whoPlay=1
                }
                break;
            case 3:
                if (game[0][2]=="") {
                    game[0][2]="X"
                    whoPlay=1
                }
                break;
            case 4:
                if (game[1][0]=="") {
                    game[1][0]="X"
                    whoPlay=1
                }
                break;
            case 5:
                if (game[1][1]=="") {
                    game[1][1]="X"
                    whoPlay=1
                }
                break;
            case 6:
                if (game[1][2]=="") {
                    game[1][2]="X"
                    whoPlay=1
                }
                break;
            case 7:
                if (game[2][0]=="") {
                    game[2][0]="X"
                    whoPlay=1
                }
                break;
            case 8:
                if (game[2][1]=="") {
                    game[2][1]="X"
                    whoPlay=1
                }
                break;
            default://caso 9
                if (game[2][2]=="") {
                    game[2][2]="X"
                    whoPlay=1
                }
                break;
        }
        if(whoPlay==1){
            check=checkVictory()
            if (check!="") {
                alert(check+" VENCEU")
                playing=false
            }
            updateBoard()
            move++
            playCPU()
        }
    }
}

function updateBoard() {
    for(let l=0;l<3;l++){
        for(let c=0;c<3;c++){
            if(game[l][c]=="X"){
                board[l][c].innerHTML="X"
                board[l][c].style.cursor="default"
            }else if(game[l][c]=="O"){
                board[l][c].innerHTML="O"
                board[l][c].style.cursor="default"
            }else{
                board[l][c].innerHTML=""
                board[l][c].style.cursor="pointer"
            }
        }
    }
}

//inicializar a matriz de game
function start() {
    playing=true
    cpuMove=1
    move=0
    game=[
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    board=[
        [document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3')],
        [document.getElementById('p4'),document.getElementById('p5'),document.getElementById('p6')],
        [document.getElementById('p7'),document.getElementById('p8'),document.getElementById('p9')]
    ]
    updateBoard()
    if (whoStart==1) {
        whoStart=0
        whoPlay=whoStart
        document.getElementById('whoStart').innerHTML="Quem começa: Jogador"
    }else{
        whoStart=1
        whoPlay=whoStart
        document.getElementById('whoStart').innerHTML="Quem começa: CPU"
        playCPU()
    }

}

window.addEventListener("load", start)


