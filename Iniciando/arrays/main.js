const arr = [];

const obg = {};

const produtos = [
    {id: 1, nome: 'pedro', valor: 200, categoria: 'limpeza'},
    {id: 10, nome: 'carol', valor: 200, categoria: 'limpeza'},
    {id: 5, nome: 'viviane', valor: 200, categoria: 'alimento'},
    {id: 8, nome: 'Rosa', valor: 200, categoria: 'limpeza'},
    {id: 4, nome: 'Joaquim', valor: 200, categoria: 'alimento'},
];
const alimentos = produtos
.filter(produto => produto.categoria === 'alimento')
.map(produto => produto.nome);//usando dois metodos juntos filter e map

console.log(alimentos)

const ids = produtos.map(produto => produto.id);
const nomes = produtos.map(produto => produto);

console.log(ids);
console.log(nomes)

const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(x => x *2);// retornando um array diferente
console.log(duplicados)
