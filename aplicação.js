
// Declaração das variáveis
let vitorias = 0;
let derrotas = 0;
let saldoVitorias = 0;
let nivel = "";

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  saldoVitorias = vitorias - derrotas;

  // Verifica o nível do jogador
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return saldoVitorias;
}

// Solicita as informações ao usuário
vitorias = prompt("Quantas vitórias você tem?");
derrotas = prompt("Quantas derrotas você tem?");

// Calcula o saldo de vitórias e o nível do jogador
saldoVitorias = calcularSaldo(vitorias, derrotas);

// Exibe o resultado
alert(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
