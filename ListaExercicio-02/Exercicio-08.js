// 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.

const express = require('express');
const app = express();

const cargos = {
  101: 0.05,
  102: 0.075,
};

app.get('/aumento-salarial-cargo', (req, res) => {
  const salario = parseFloat(req.query.salario);
  const codigoCargo = parseInt(req.query.codigoCargo);

  if (!salario || isNaN(salario) || !codigoCargo || isNaN(codigoCargo)) {
    return res.status(400).send('Parâmetros inválidos.');
  }

  let aumento;
  if (cargos.hasOwnProperty(codigoCargo)) {
    aumento = cargos[codigoCargo];
  } else {
    aumento = 0.15;
  }

  const novoSalario = salario + (salario * aumento);
  const diferenca = novoSalario - salario;

  res.send(`Salário antigo: R$${salario.toFixed(2)}\nNovo salário: R$${novoSalario.toFixed(2)}\nDiferença: R$${diferenca.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
