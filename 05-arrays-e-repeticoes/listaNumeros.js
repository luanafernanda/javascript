/*Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i]);
  }
}
