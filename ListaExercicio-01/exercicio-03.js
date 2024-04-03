// 3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();


// Função para calcular o novo salário com base no salário atual e no percentual de reajuste
function novoSalario(salarioAtual, percentualReajuste) {
    const valorReajuste = salarioAtual * (percentualReajuste / 100);
    const novoSalario = salarioAtual + valorReajuste;
  
    return novoSalario;
  }
  
  // Leitura dos dados de entrada
  const salarioAtual = Number(prompt("Digite o salário atual do funcionário: "));
  const percentualReajuste = Number(prompt("Digite o percentual de reajuste: "));
  
  // Cálculo do novo salário
  const novoSalarioCalculado = novoSalario(salarioAtual, percentualReajuste);
  
  // Exibição do resultado
  console.log("O novo salário do funcionário é: " + novoSalarioCalculado.toFixed(2));