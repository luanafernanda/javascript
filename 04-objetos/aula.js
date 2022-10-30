class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const vitor = new Pessoa();
vitor.nome = "Vitor Antonio";
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = "Renan Paes";
renan.idade = 30;
console.log(vitor);
