//6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:

const express = require('express');
const app = express();

app.get('/peso-ideal', (req, res) => {
  const altura = parseFloat(req.query.altura);
  const sexo = req.query.sexo;

  if (!altura || isNaN(altura) || !sexo || (sexo !== 'M' && sexo !== 'F')) {
    return res.status(400).send('Parâmetros inválidos.');
  }

  let pesoIdeal;
  if (sexo === 'M') {
    pesoIdeal = (72.7 * altura) - 58;
  } else {
    pesoIdeal = (62.1 * altura) - 44.7;
  }

  res.send(`Seu peso ideal é de aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
