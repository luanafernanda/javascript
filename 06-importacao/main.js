const { gets, print } = require("./funcoes-auxiliares");

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  if (numerosSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteado;
  }
}

print(maiorValor);
