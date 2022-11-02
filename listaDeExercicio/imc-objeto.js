/* Crie uma classe para representar pessoas.
Pra cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / altura * altura).
Instacie uma pessoa chama José, que tem 70kg e 1.75 de altura e peça para  o José dizer o valor do seu IMC */

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  falarImc() {
    const imc = this.calcularImc();

    if (imc < 18.5) {
      return `Meu imc é ${imc.toFixed(1)} e eu estou abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 25) {
      return `Meu imc é ${imc.toFixed(1)} e eu estou com o peso normal`;
    } else if (imc >= 25 && imc <= 30) {
      return `Meu imc é ${imc.toFixed(1)} e eu estou acima do peso`;
    } else if (imc >= 30 && imc <= 40) {
      return `Meu imc é ${imc.toFixed(1)} e eu estou obeso`;
    } else {
      return `Meu imc é ${imc.toFixed(1)} e eu estou com obesidade grave`;
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.falarImc());
