const imagem = document.getElementById('imagem-luzes')
const botao = document.getElementById('botoes') 


let indexCor = 0;
let idIntervalo = null;

const ligarAutomatico = {
    'vermelho': () => imagem.src = 'vermelho.png',
    'amarelo': () => imagem.src = 'amarelo.png',
    'verde': () => imagem.src = 'verde.png',
    'azul': () => imagem.src = 'azul.png',
    'automatico': () => idIntervalo = setInterval(mudarCor, 1000),
    'desligar' : () => imagem.src ='desligado.png',
    'ligar' : () => imagem.src ='ligado.png'
}

const cores = ['verde', 'amarelo', 'vermelho', 'azul'] 
console.log(cores)

const AcenderLuzes = (event) => {
    parar();
    ligarAutomatico[event.target.id](); 
} 

const contador = () => { 
    if (indexCor < 3 ){
        indexCor++
    }else{
        indexCor = 0
    }
}

const mudarCor = () => {
    ligarAutomatico[cores[indexCor]](); 
    contador(); 
}

const parar = () => {
    clearInterval (idIntervalo);
}


botao.addEventListener('click', AcenderLuzes);
