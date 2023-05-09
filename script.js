function jogar(escolhaJogador) {
    let resultado = '';
    if (escolhaJogador === 'tesoura') {
        if (escolhaComputador === 'pedra') {
            resultado = 'Você perdeu.';
        }
        else if (escolhaComputador === 'papel') {
            resultado = 'Você ganhou.';
        }
        else if (escolhaComputador === 'tesoura') {
            resultado = 'Empate.';
        }

    } else if (escolhaJogador === 'papel') {
        if (escolhaComputador === 'pedra') {
            resultado = 'Você ganhou.';
        }
        else if (escolhaComputador === 'papel') {
            resultado = 'Empate.';
        }
        else if (escolhaComputador === 'tesoura') {
            resultado = 'Você perdeu.';
        }
        
    } else if (escolhaJogador === 'pedra') {
        if (escolhaComputador === 'pedra') {
            resultado = 'Empate.';
        }
        else if (escolhaComputador === 'papel') {
            resultado = 'Você perdeu.';
        }
        else if (escolhaComputador === 'tesoura') {
            resultado = 'Você ganhou.';
        }
    } 
    alert(`Você escolheu ${escolhaJogador}. O computador escolheu ${escolhaComputador}. ${resultado}`);
}

let escolhaComputador = '';
function movimentoComputador() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        escolhaComputador = 'pedra';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        escolhaComputador = 'papel';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        escolhaComputador = 'tesoura';
    }
    return escolhaComputador;
}