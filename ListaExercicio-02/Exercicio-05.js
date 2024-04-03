// 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

const express = require('express');
const app = express();

app.get('/reajuste-salarial', (req, res) => {
  const salario = parseFloat(req.query.salario);

  if (!salario || isNaN(salario)) {
    return res.status(400).send('Salário inválido.');
  }

  let reajuste;
  if (salario <= 2000) {
    reajuste = salario * 0.5;
  } else {
    reajuste = salario * 0.3;
  }

  const novoSalario = salario + reajuste;

  res.send(`Salário reajustado:\n\nSalário antigo: R$${salario.toFixed(2)}\nReajuste: R$${reajuste.toFixed(2)}\nNovo salário: R$${novoSalario.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
