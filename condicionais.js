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
