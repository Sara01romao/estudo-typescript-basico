
//contrado que define atributos e métodos
interface Humano{
    nome:string //obrigatorio
    idade?:number //?opcional
    [prop:string]: any//nome dinamico
    suadar(sobrenome:string):void//metodo obrigatorio
}

//defini o tipo do parametro

function saudarComOla(pessoa:Humano){
    console.log('Olá', pessoa.nome)
}


const pessoa:Humano ={
    nome: "Sara",
    idade:27,
    suadar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome+ ' ' +sobrenome)
    }
}

saudarComOla(pessoa)

pessoa.suadar('Romão')

//Classe
class Cliente implements Humano{
    nome: string =''
    suadar(sobrenome: string): void {
        console.log('Olá, meu nome é' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente);
meuCliente.suadar('Solo')


//Interface Função
interface FuncaoCalculo{
    (a:number, b:number): number
}

let potencia: FuncaoCalculo

potencia = function(base:number, exp:number):number{
    return Array(exp).fill(base).reduce((t, a)=> t*a)
}

console.log(potencia(2,2))