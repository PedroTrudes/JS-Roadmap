//Function normal sem passar argumentos
function primeiraFuncao() {
    console.log("hello word function")
}

//Passando parametros na function
function nomeUsuario(nome){
    console.log(`o nome é ${nome}`);
}

//function com retorno
function soma(a, b){//esperando um Parametro
    let sum = a + b;
    return sum;
}

function parametrosDistintos(...Arr){// assim ele cria um array com todos os dados sem limite de argumentos
    console.log(Arr);
}

function listaNomes(titulo, subtitulo, ...arr){
    let nomes = "";
    for(let i = 0; i < arr.length; i++ ){
        const umNome = arr[i];
        nomes += umNome + " ";
    }

    console.log(`${titulo}, ${subtitulo}, ${nomes}`);
}

primeiraFuncao();//chamando uma função normal

let nome = 'pedro';
nomeUsuario(nome.toUpperCase());//estou passando uma variavel como parametro para a function

const somaUm = soma(5, 2);//estou atribuindo o retorno da functio a essa variavel
console.log(somaUm);

const somaDois = soma(15, 5);// passando um argumento
console.log(somaDois);//usando o return

console.log(soma(2, 1));//sem usar o return 

let valoresArgumentos = parametrosDistintos(1, 2, 3, "Pedro", "Trudes") // se usar const ele não funciona pois o tipo do dado é diferente

listaNomes('Pedro', 'joaquim', 'Trudes', 'martins');// testando lista de dados com for em uma function