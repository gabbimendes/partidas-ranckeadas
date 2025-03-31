// DESAFIO DE PARTIDAS RANQUEADAS: Função de vitórias e derrotas
function calcularVitoriasDerrotas(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let classificacao = ""; // Permitimos modificar essa variável depois
  
    // Classificação do jogador com base nas vitórias
    if (vitorias >= 0 && vitorias <= 10) {
      classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      classificacao = "Lendário";
    } else if (vitorias >= 101) {
      classificacao = "Imortal";
    }
  
    // Exibe o resultado corretamente
    console.log(`O herói tem saldo de ${saldo} vitórias e está no nível: ${classificacao}`);
  }
  
  // Teste da função com 68 vitórias e 12 derrotas
  calcularVitoriasDerrotas(68, 12);
  

