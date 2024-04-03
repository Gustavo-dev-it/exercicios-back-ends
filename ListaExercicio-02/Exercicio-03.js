// 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.


const express = require('express');
const app = express();

app.get('/salario-vendedor', (req, res) => {
  const nome = req.query.nome;
  const salarioFixo = parseFloat(req.query.salarioFixo);
  const totalVendas = parseFloat(req.query.totalVendas);
  const percentualComissao = parseFloat(req.query.percentualComissao);

  if (!nome || !salarioFixo || isNaN(salarioFixo) || !totalVendas || isNaN(totalVendas) || !percentualComissao || isNaN(percentualComissao)) {
    return res.status(400).send('Parâmetros inválidos.');
  }

  const comissao = totalVendas * (percentualComissao / 100);
  const salarioTotal = salarioFixo + comissao;

  res.send(`Vendedor: ${nome}\nSalário fixo: R$${salarioFixo.toFixed(2)}\nComissão: R$${comissao.toFixed(2)}\nSalário total: R$${salarioTotal.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('API em execução na porta 3000');
});
