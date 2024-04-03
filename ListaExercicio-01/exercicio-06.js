// 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const prompt = require('prompt-sync')();


// Função para calcular o salário final do vendedor
function salarioFinal(carrosVendidos, valorVendas, salarioFixo, comissaoCarro) {
    const comissao = comissaoCarro * carrosVendidos;
    const comissaoPorcento = valorVendas * 0.05;
    const salarioFinal = salarioFixo + comissao + comissaoPorcento;
  
    return salarioFinal;
  }
  
  // Leitura dos dados de entrada
  const carrosVendidos = Number(prompt("Digite o número de carros vendidos: "));
  const valorVendas = Number(prompt("Digite o valor total de suas vendas: "));
  const salarioFixo = Number(prompt("Digite o salário fixo: "));
  const comissaoCarro = Number(prompt("Digite o valor que ele recebe por carro vendido: "));
  
  // Cálculo do salário final
  const salarioFinalCalculado = salarioFinal(carrosVendidos, valorVendas, salarioFixo, comissaoCarro);
  
  // Exibição do resultado
  console.log("O salário final do vendedor é: " + salarioFinalCalculado.toFixed(2));