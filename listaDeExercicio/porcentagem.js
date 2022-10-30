/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
utiliz os códigos da tabela a seguir para lerqual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagaemnto:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/

const precoEtiqueta = 100;
const formaDePag = 1;

if (formaDePag === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (formaDePag === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (formaDePag === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
}
