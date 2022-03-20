"use strict";
//defini o tipo do parametro
function saudarComOla(pessoa) {
    console.log('Olá', pessoa.nome);
}
const pessoa = {
    nome: "Sara",
    idade: 27,
    suadar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
pessoa.suadar('Romão');
//Classe
class Cliente {
    constructor() {
        this.nome = '';
    }
    suadar(sobrenome) {
        console.log('Olá, meu nome é' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.suadar('Solo');
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 2));
