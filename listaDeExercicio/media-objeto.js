/*Cri euma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro e o preço do combustível. Nos dê o valor gasto em reais para realizar esse percurso*/

class Carro {
  marca;
  cor;
  valorMedioCombustivel;

  constructor(marca, cor, valorMedioCombustivel) {
    this.marca = marca;
    this.cor = cor;
    this.valorMedioCombustivel = valorMedioCombustivel;
  }

  calcularViagem(distancia, valorCombustivel) {
    return distancia * this.valorMedioCombustivel * valorCombustivel;
  }
}

const carro1 = new Carro("Ferrari", "vermelho", 1 / 7);

console.log(carro1.calcularViagem(70, 5));
