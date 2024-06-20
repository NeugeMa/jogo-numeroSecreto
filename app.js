// Variáveis 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ; 

// função - exibi texto 
function exibirTextoNaTela(tag, texto) { // Em todos os lugares que a palavra tag está, ela será subtituida por h1 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo - Adivinhe o número secreto');
    exibirTextoNaTela('p', 'Escolha o número entre 1 à 10');
} 

exibirMensagemInicial(); 

// Utilizando a função onclick 
// função - verificar interação
function verificarChute() {
    let chute = document.querySelector('input').value; // value = valor

    // Se o chute for igual a numeroSecreto
    if (chute ==  numeroSecreto) { // == comparação de valor
        exibirTextoNaTela('h1', 'Acertou!'); 

        // Adicionando tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else { // Se o chute for maior/ menor que o número secreto
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','Quase! O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'Quase! O número secreto é maior');
        }

        tentativas++; // ++ operador de incremento, usado para adicionar 1 a uma variável
        limparCampo();
    }
}

// Utilizando funções com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // Return usada para que a função possa retornar um valor.
    // Utilizando parseInt para transformar em número inteiro
}

function limparCampo() {
    chute = document.querySelector('input'); 
    chute.value = ''; // Uma string vazia
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo(); 
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}