// variaveis com js
var message = "Hello word";//não é muito mais usado pois não usa blockScoup
const messageConst = "Teste de const";//Esse valor vai se manter
let messageLet = "teste de Let";

messageLet = "Hello word com LET";
//messageConst = "Ola mundo";//Ele não permite que eu mude o valor de uma constante
console.log(messageLet);
console.log(messageConst);
alert(message);


// Strings
const fristName = "Pedro";
const lastName = "Joaquim";

console.log(`Meu nome é: ${fristName.toLowerCase()} - ${lastName.toUpperCase()}`);
console.log(messageConst.length)// manipulando para pegar o tamanho da string

// Numeros
const number = 6;
console.log(typeof number);// aqui ele é um number
console.log(typeof number.toString());// aqui ele é uma string


//Booleanos
let testBool = false;
let testBool2 = true;

// null & Undefined
const y = null;
const x = undefined;

// Arrays e Objetos
const listNumerica = [1,2,3,4];
const listPessoas = {name: "Pedro", name: "João"};

//Condições
if(messageConst.length < 15){
    messageLet = "A const tem menos de 15 caracteres";// o let pode ser alterado o valor dentro do if
    let messageTest = true; // eu posso declarar uma variavel dentro e fora do if alterar a mesma
    console.log(messageLet, messageTest);
}else{
    //messageConst = "é maior que 15"// sempre que eu for mudar o valor de uma constante ele bloqueia com um erro
    messageTest = false;// mudando o valor da variavel
    console.log(messageConst, messageTest);
}


//Arrays
const names = "Pedro, Thiago, João"; // criando uma const com varios nomes
let listaNomes = []; // criando um let de array

listaNomes = names.split(',');// pegando a const de names e separando as infos para transformalas em array e jogando para a variavel listaNomes;
console.log(names.split(","));
console.log(listaNomes[1]);//buscando uma casa do array especifica