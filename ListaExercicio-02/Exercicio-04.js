// 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.

const express = require('express');
const app = express();

app.get('/velocidade-media', (req, res) => {
  const nome = req.query.nome;
  const distancia = parseFloat(req.query.distancia);
  const tempo = parseFloat(req.query.tempo);

  if (!nome || !distancia || isNaN(distancia) || !tempo || isNaN(tempo)) {
    return res.status(400).send('Parâmetros inválidos.');
  }

  const velocidadeMedia = distancia / tempo;

  res.send(`A velocidade média do ${nome} foi ${velocidadeMedia.toFixed(2)} km/h.`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
