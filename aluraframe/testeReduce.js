const arrayTodosOsDebitos = [
  [
    { dia: '01/01/2018', valor: 50 },
    { dia: '02/01/2018', valor: 100 },
    { dia: '03/01/2018', valor: 100 },
  ],
  [
    { dia: '04/01/2018', valor: 200 },
    { dia: '05/01/2018', valor: 300 },
    { dia: '06/01/2018', valor: 400 },
  ],
  [
    { dia: '07/01/2018', valor: 120 },
    { dia: '08/01/2018', valor: 220 },
    { dia: '09/01/2018', valor: 320 },
  ],
];
// sitaxe do reduce array.reduce ((valorAcumuado, valorCorrente) => valorAcumulado += valorCorrente, 0)
const arrayUnico = arrayTodosOsDebitos.reduce(
  (arrayAcumulado, arrayAtual) => arrayAcumulado.concat(arrayAtual),
  [],
);

console.log(arrayUnico);
