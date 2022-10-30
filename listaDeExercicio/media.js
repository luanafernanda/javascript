/*Faça um algoritmo que dadoo as 3 notas tiradas por um aluno em um semestre da faculdade.
Calcule e imprima sua média e a classificação conforme a tabela abaixo:

Classificação: 
- Média menor que 5: reprovação 
- Média entre 5 e 7: recuperação
- Média acima de 7: aprovado
*/

const nota1 = 5;
const nota2 = 6;
const nota3 = 8;
const resultado = "";
media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  resultado = "reprovado";
} else if (media >= 5 && media <= 7) {
  resultado = "recuperação";
} else {
  resultado = "aprovado";
}

console.log(resultado);
