var altura = 0  
var largura = 0
var vidas = 1
var time = 15

var mostraMoscatempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    var mostraMoscatempo = 1500
} else if(nivel === 'dificil'){
    var mostraMoscatempo = 1000
} else if(nivel === 'chucknorris'){
    var mostraMoscatempo = 750

}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){
    time -= 1
    if(time < 0){
        clearInterval(cronometro)
        clearInterval(mostraMoscas)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = time
    }
},1000)

function randomPosition(){
    //remover o mosquito caso ja exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'game_over.html'
        }else{
            document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    //criar o mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = randomSize() +' '+ randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function randomSize(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0: 
            return 'mosquito1'
        case 1: 
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}

function randomSide(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0: 
            return 'sideA'
        case 1: 
            return 'sideB'
    }
}
