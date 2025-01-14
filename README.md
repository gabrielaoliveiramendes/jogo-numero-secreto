# Jogo do Número Secreto

## Introdução
Este projeto é um jogo simples de adivinhação desenvolvido em JavaScript, HTML e CSS. O objetivo do jogo é que o usuário descubra um número secreto gerado aleatoriamente pelo computador. A cada tentativa, o usuário recebe dicas sobre se o número escolhido é maior ou menor que o número secreto.

## Tecnologias Utilizadas
HTML: Estrutura da página, definindo os elementos como botões, caixas de texto e imagens.
CSS: Estilização da página, aplicando cores, fontes e layout para criar uma interface visualmente agradável.
JavaScript: Lógica do jogo, responsável por gerar o número secreto, receber as entradas do usuário, comparar os valores e fornecer feedback.

## Funcionamento do Jogo
### Geração do Número Secreto:
Ao iniciar o jogo, o JavaScript gera um número aleatório entre 1 e 1000 utilizando Math.random() e parseInt.
### Entrada do Usuário:
O jogador insere seu palpite em um prompt que aparece na tela.
### Comparação e Feedback:
O JavaScript compara o palpite do jogador com o número secreto. Se o palpite estiver correto, o jogo termina e uma mensagem de vitória é exibida. Caso contrário, o jogador recebe uma dica indicando se o número secreto é maior ou menor que o palpite.
### Loop de Repetição:
O processo de entrada e comparação se repete até que o jogador acerte o número secreto. O loop while é utilizado para garantir que o jogo continue enquanto a condição (palpite diferente do número secreto) for verdadeira.

## Conceitos de JavaScript Utilizados
- while: Estrutura de repetição que executa um bloco de código enquanto uma determinada condição for verdadeira. Neste caso, o loop continua enquanto o palpite do jogador for diferente do número secreto.
- parseInt: Função que converte em um número inteiro.
- Math.random(): Função que gera um número aleatório entre 0 (inclusive) e 1 (exclusivo). Multiplicando esse número por 1000 e adicionando 1, obtemos um número aleatório entre 1 e 1000.
- if...else: Estrutura condicional que permite executar diferentes blocos de código com base em uma condição. Neste caso, é utilizada para verificar se o palpite do jogador é maior, menor ou igual ao número secreto.
- break: Instrução que interrompe a execução de um loop. É utilizada para encerrar o jogo quando o jogador acerta o número secreto.
- Operador Ternário: Uma forma concisa de escrever uma expressão condicional. No código, é utilizado para determinar se a palavra "tentativas" ou "tentativa" deve ser exibida na mensagem final, dependendo do número de tentativas.
