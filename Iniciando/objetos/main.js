let nome = "pedro";
let idade = 23;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionada = null;

// chave e valor
let pessoa = [{
    "nome": "Pedro",
    "idade": 23,
    "estaAprovado": true,
    "sobrenome": undefined,
    "corSelecionada": null
},
{
    "nome": "Pedro",
    "idade": 23,
    "estaAprovado": true,
    "sobrenome": undefined,
    "corSelecionada": null
},
{
    "nome": "Pedro",
    "idade": 23,
    "estaAprovado": false,
    "sobrenome": undefined,
    "corSelecionada": null
},
{
    "nome": "Pedro",
    "idade": 23,
    "estaAprovado": true,
    "sobrenome": undefined,
    "corSelecionada": null
}]

console.log(pessoa)// pegando todos os dados
console.log(pessoa.estaAprovado)// pegando algum dado especifico 
console.log(pessoa[1])// pegando um array só


function somarAprovados(pessoas){
    let countAprovados = 0;// contadores de aprovados e reprovados
    let countReprovados = 0;
    for(let i = 0; i < pessoas.length; i++){//percorrendo o array de pessoas
        if(pessoas[i].estaAprovado === true){//o i é muito importante pois ele que permite que a gente percorra os demais objetos e verifique
            countAprovados++
            pessoas[i].corSelecionada = 'verde';
        }else{
            countReprovados++
            pessoas[i].corSelecionada = 'vermelho'
        }
    }
    console.log(pessoas)
    console.log(`numero de alunos Aprovados: ${countAprovados}`)
    console.log(`numero de alunos Reprovados: ${countReprovados}`)

}

somarAprovados(pessoa)// passando um array de objetos como argumento


let animais = {
    "Cachorro": "animal01",
    "Tartaruga": "animal02",
    "Gato" : "animal03",
}

const animaisArray = Object.entries(animais);// transformando um objeto em array
console.log(animaisArray);