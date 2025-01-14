alert("Bem vindo ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//while: irá executar as instruções enquanto a condição for verdadeira
while (chute != numeroSecreto) { 
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);

    if (numeroSecreto == chute){
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é maior que ${chute}!`);
        }
        tentativas++; //tentativas = tentativas + 1
    }
}; //o prompt continuará aparecendo enquanto o chute não for igual ao numeroSecreto

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`); //crase (`) ao misturar texto com código
