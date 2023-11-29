//criando um elemento
let novoParagrafo = document.createElement("p");

//criando o conteudo do elemento
let texto = document.createTextNode("Este é o conteudo do P");
novoParagrafo.appendChild(texto); //inserindo o conteudo no elemento
console.log(novoParagrafo);

var body = document.querySelector("body");//pegando o body do site
console.log(body);

body.appendChild(novoParagrafo);//inserindo o paragrafo no body

//pegando um container

let container = document.getElementById("container");

console.log(container);

let el = document.createElement("span");

el.appendChild(document.createTextNode("texto Span de teste"));
console.log(el);

container.appendChild(el);