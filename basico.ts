//string
const nome:string= "sara";
console.log(nome)

//number
const idade:number = 26;
console.log(idade)

//boolean
let par:boolean = false;
console.log(par)

//array pode dizer que é um array e tipo de conteudo do array:
//any, number...
let hobbies: any[] = ["Jogar", "plantar", "andar"];


//tuplas-verifica quantidade e tipos de itens
let endereco: [string,number] = ['Av Caju', 99]
console.log(endereco)

//enums - estrutura com valores pré definidos 
enum Cor{
    Cinza,
    Verde,
    Azul,
}

let minhaCor:Cor = Cor.Verde
console.log(minhaCor)


//any
let carro:any ="bnw"
console.log(carro);

carro = {marca: "bnw", placa: 222}
console.log(carro)

