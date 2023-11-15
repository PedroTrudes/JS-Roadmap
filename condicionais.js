//trabalhando com if e else
let idade = 15;
const idadeMinima = 18;

if(idade >= idadeMinima) {
    console.log('Você pode tirar a sua carteira');
}else{
    let idadeFaltando = idadeMinima - idade;
    console.log(`Você ainda não pode tirar a sua carteira, falta ${idadeFaltando} anos para você tirar.`)
}

let nome = "pedro".toUpperCase();

if(nome == "PEDRO"){
    console.log("nome certo")
}
if(nome != "joão"){
    console.log("nome não é pedro e sim joão")
}

//else if
const nomeElse = "Carlos"
let maiorDeIdade = true;

if(nomeElse == "Carls"){//aqui estou forçando um nome errado apra ele executar o else if(maiorDeIdade == true).
    console.log("Okay");
}else if( maiorDeIdade == false){//se o valor da linha 25 for certo ele não passa pelo else if.
    console.log("e você é maior de idade")
}else{
    console.log("Nome Errado e ele é menor de idade");
}
//else if podem ser colocados o quando você quiser, porem tem maneiras mais simples e limpas de fazer uma dupla verificação

let idadeUsuario = 19;
let acompanhado = true;
if(idade > 20){
    console.log("ele pode entrar na festa");
}else if(idade <=20 && acompanhado == true){
    console.log("Seja bem vindo com o seu acompanhante");
}else{
    console.log("só é permitido maiores de 20 anos ou com acompanhantes")
}

//comparadores de tipo e valor
let numero = 5;

if(numero.toString() === "5"){ // aqui eu manipulei o let para virar uma string
    console.log("o numero é 5");
}else{
    console.log("o tipo da variavel é diferente da condicional")
}

if(numero !== "5"){ // aqui ele esta vendo se realmente o tipo é diferente se for diferente ele retorna true
    console.log("não é o numero 5 tipo String");
}else{
    console.log("o tipo da variavel é diferente da condicional")
}

// Swicht case
let permissao;
permissao = 'pedro';

switch(permissao){
    case 'comum':
        console.log("usuario comum");
        break;
        case 'gerente':
            console.log("usuario Gerente");
            break;
            case 'diretor':
                console.log("usuario diretor");
                break;
                
                default: 
                console.log("usuario não reconhecido");
            }
            
// For
for(i = 1; i <= 5; i++){//enquanto o i for menor que 5 ele vai repetir esse console e mostrar mais 5 vezes até o valor de i ser maior que 5
    console.log('Estou aprendendo o FOR', i)
    if(i % 2 != 0){//mostrnado apenas o impar
        console.log(i)
    }
}

// while
//variavel de indice tem que ser criada fora do loop
let index = 5;
while(index >= 1){
    if(index % 2 !== 0){
        console.log(index);
    }   
    index--;
}

//DO While

let contador = 0;
do {
    console.log("Digitando", contador);
    contador ++;
}while(contador < 10)