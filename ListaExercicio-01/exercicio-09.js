// 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();


// Solicitação de entrada do primeiro número
const primeiro_numero = Number(prompt("Digite o primeiro número: "));

// Solicitação de entrada do segundo número
const segundo_numero = Number(prompt("Digite o segundo número: "));

// Cálculo da soma dos dois números
const soma = primeiro_numero + segundo_numero;

// Multiplicação do resultado da soma pelo primeiro número
const resultado = soma + primeiro_numero;

// Exibição do resultado
console.log("O resultado da multiplicação da soma dos números pelo primeiro número é: " + resultado);