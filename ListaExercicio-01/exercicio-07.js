// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();


// Função para calcular a média ponderada do aluno
function mediaPonderada(nota1, peso1, nota2, peso2) {
    const somaProdutos = (nota1 * peso1) + (nota2 * peso2);
    const somaPesos = peso1 + peso2;
    const media = somaProdutos / somaPesos;
  
    return media;
  }
  
  // Leitura dos dados de entrada
  const nota1 = Number(prompt("Digite a primeira nota: "));
  const peso1 = 4;
  const nota2 = Number(prompt("Digite a segunda nota: "));
  const peso2 = 6;
  
  // Cálculo da média ponderada
  const mediaCalculada = mediaPonderada(nota1, peso1, nota2, peso2);
  
  // Exibição do resultado
  console.log("A média ponderada é: " + mediaCalculada.toFixed(2));