// 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.


const express = require('express');
const app = express();

app.get('/aumento-salarial', (req, res) => {
  const salario = parseFloat(req.query.salario);

  if (!salario || isNaN(salario)) {
    return res.status(400).send('Salário inválido.');
  }

  if (salario >= 1000) {
    return res.send(`Funcionário não tem direito ao aumento. Salário atual: R$${salario.toFixed(2)}`);
  }

  const aumento = salario * 0.3;
  const novoSalario = salario + aumento;

  res.send(`Parabéns! Você recebeu um aumento de R$${aumento.toFixed(2)}. Seu novo salário é de R$${novoSalario.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
