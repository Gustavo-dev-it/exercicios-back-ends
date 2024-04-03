// 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

const express = require('express');
const app = express();

app.get('/calculo-salario', (req, res) => {
  const salarioMinimo = parseFloat(req.query.salarioMinimo);
  const horasTrabalhadas = parseInt(req.query.horasTrabalhadas);
  const dependentes = parseInt(req.query.dependentes);
  const horasExtras = parseInt(req.query.horasExtras);

  if (!salarioMinimo || isNaN(salarioMinimo) || !horasTrabalhadas || isNaN(horasTrabalhadas) || !dependentes || isNaN(dependentes) || !horasExtras || isNaN(horasExtras)) {
    return res.status(400).send('Parâmetros inválidos.');
  }

  // Cálculo do valor da hora trabalhada
  const valorHoraTrabalhada = salarioMinimo / 5;

  // Cálculo do salário do mês
  const salarioMes = horasTrabalhadas * valorHoraTrabalhada;

  // Cálculo do valor das horas extras
  const valorHoraExtra = valorHoraTrabalhada * 1.5;
  const valorHorasExtras = horasExtras * valorHoraExtra;

  // Cálculo do salário bruto
  const salarioBruto = salarioMes + valorHorasExtras + (dependentes * 32);

  // Cálculo do IRRF
  let irrf;
  if (salarioBruto < 2000) {
    irrf = 0;
  } else if (salarioBruto < 5000) {
    irrf = salarioBruto * 0.1;
  } else {
    irrf = salarioBruto * 0.2;
  }

  // Cálculo do salário líquido
  const salarioLiquido = salarioBruto - irrf;

  // Cálculo da gratificação
  let gratificacao;
  if (salarioLiquido <= 3500) {
    gratificacao = 1000;
  } else {
    gratificacao = 500;
  }

  // Cálculo do salário a receber
  const salarioAReceber = salarioLiquido + gratificacao;

  res.send(`Salário a receber: R$${salarioAReceber.toFixed(2)}\n\nDetalhes do cálculo:\n\nSalário mínimo: R$${salarioMinimo.toFixed(2)}\nHoras trabalhadas: ${horasTrabalhadas}\nDependentes: ${dependentes}\nHoras extras: ${horasExtras}\n\nValor da hora trabalhada: R$${valorHoraTrabalhada.toFixed(2)}\nSalário do mês: R$${salarioMes.toFixed(2)}\nValor das horas extras: R$${valorHorasExtras.toFixed(2)}\nSalário bruto: R$${salarioBruto.toFixed(2)}\nIRRF: R$${irrf.toFixed(2)}\nSalário líquido: R$${salarioLiquido.toFixed(2)}\nGratificação: R$${gratificacao.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
