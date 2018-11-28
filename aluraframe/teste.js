let numeros = [3, 2, 11, 20, 8, 7];
let resultado = [];
numeros.map(item => {
  item % 2 ? resultado.push(item * 2) : resultado.push(item);
});

console.log(resultado);
