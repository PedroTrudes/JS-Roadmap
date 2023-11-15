// && - AND só retorna true se as duas condições forem verdadeiras
let idade = 16;
let nome = "Pedro";

if(nome == "Pedro" && idade >= 16){
    console.log("Parabens você pode participar")
}else{
    console.log("infelizmente você não pode entrar na aula")
}

// || conhecido como OR se uma das condições for verdadeira ele da TRUE
if(nome == "Carlos" || idade >= 16){
    console.log("parabens você tem a idade para a aula")
}else{
    console.log("Você não tem idade e nem é o Carlos, então não pode participar das aulas")
}

// usando os dois
if(nome == "Pedro" && 15 > 20 || 10 == 10){//testando o or e and
    console.log("testando")
}

if(nome == "Pedro" && (5 > 20 || 10 === 100)){//isolando as condições
    console.log("testando")
}else{
    console.log("não entrou")
}

// ! - NOT operador de negação
if(!false){
    console.log('passou')
}

if(!(nome == "Pedro")){
    console.log("OK")
}