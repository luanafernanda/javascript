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

const luana = new Pessoa("Luana", 24);
const lady = new Pessoa("Lady", 25);

luana.descrever();
lady.descrever();
