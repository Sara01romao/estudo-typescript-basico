"use strict";
//string
const nome = "sara";
console.log(nome);
//number
const idade = 26;
console.log(idade);
//boolean
let par = false;
console.log(par);
//array pode dizer que é um array e tipo de conteudo do array:
//any, number...
let hobbies = ["Jogar", "plantar", "andar"];
//tuplas-verifica quantidade e tipos de itens
let endereco = ['Av Caju', 99];
console.log(endereco);
//enums - estrutura com valores pré definidos 
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//any
let carro = "bnw";
console.log(carro);
carro = { marca: "bnw", placa: 222 };
console.log(carro);
