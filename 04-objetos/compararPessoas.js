class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Meu nomes é ${this.nome} e minha idade é ${this.idade}`);
  }
}

function compararPessoa(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
  }
}

const luana = new Pessoa("Luana", 24);
const lady = new Pessoa("Lady", 25);

console.log(compararPessoa(luana, lady));
