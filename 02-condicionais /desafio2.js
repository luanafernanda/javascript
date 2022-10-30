/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. 
*/
const valorEtanol = 5.79;
const valorGasolina = 6.66;
const gastoMedioKm = 10;
const kmViagem = 100;
const tipoCombustivel = "Gasolina";
const valorgasto = 0;

if (tipoCombustivel === "Etanol") {
  valorGasto = (kmViagem / gastoMedioKm) * valorEtanol;
} else {
  valorGasto = (kmViagem / gastoMedioKm) * valorGasolina;
}

console.log(valorGasto.toFixed(2));
