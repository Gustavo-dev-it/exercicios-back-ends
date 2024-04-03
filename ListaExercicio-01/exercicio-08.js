 // 8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
  // OBS: V = PI * Raio^2 * Altura

  const prompt = require('prompt-sync')();

// Função para calcular o volume da caixa d'água
function volumeCilindro(raio, altura) {
    const volume = Math.PI * Math.pow(raio, 2) * altura;
  
    return volume;
  }
  
  // Leitura dos dados de entrada
  const raio = Number(prompt("Digite o raio da base da caixa d'água: "));
  const altura = Number(prompt("Digite a altura da caixa d'água: "));
  
  // Cálculo do volume
  const volumeCalculado = volumeCilindro(raio, altura);
  
  // Exibição do resultado
  console.log("O volume da caixa d'água é: " + volumeCalculado.toFixed(2));