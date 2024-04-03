  // 4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

  const prompt = require('prompt-sync')();


// Função para calcular o custo final do carro
function custoFinal(custoFabrica, percentualDistribuidor, impostos) {
    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoImpostos = custoFabrica * (impostos / 100);
    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
  
    return custoFinal;
  }
  
  // Leitura dos dados de entrada
  const custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
  const percentualDistribuidor = 28;
  const impostos = 45;
  
  // Cálculo do custo final
  const custoFinalCalculado = custoFinal(custoFabrica, percentualDistribuidor, impostos);
  
  // Exibição do resultado
  console.log("O custo final do carro é: " + custoFinalCalculado.toFixed(2));