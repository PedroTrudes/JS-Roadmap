let tituloSecao = document.getElementById("titulo-secao");
console.log(tituloSecao);

let divResultado = document.getElementsByClassName("resultados");
console.log(divResultado);//ele devolve mais de um elemento pois eles tem o mesmo nome

//selecionar elemento por tag

let paragrafo = document.getElementsByTagName("h1");//pouco usado
console.log(paragrafo);

//Seletores por CSS - Query Selector
let intemList = document.querySelectorAll("#lista .item")
//passando dois valores para ele poder identificar e ter um ponto de referencia
console.log(intemList);

let intemListTotal = document.querySelectorAll(".item");//sempre que for mais de um elemento
console.log(intemListTotal);

let primeiroItem = document.querySelector(".item");//sempre que for somente um elemento
console.log(primeiroItem)