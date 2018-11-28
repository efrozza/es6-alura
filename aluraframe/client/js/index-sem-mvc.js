let campos = [
  // documento query Selector api do DOM
  // seletor de id # do css
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

console.log(campos);

// addEventListener adiciona um evento a um elemento.
// nesse exemplo foi adicionado o evento submit ao elemento com a classe form
let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  //criando elementos dinamicamente
  let tr = document.createElement('tr');

  // criando tds do array campos
  campos.forEach(campo => {
    // cria uma td
    let td = document.createElement('td');
    // adiciona como conteudo o valor do campo
    td.textContent = campo.value;
    // adiciona o td no tr
    tr.appendChild(td);
  });

  // cria td para o campo volume
  let tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  // inclui a tdVolume como filha do tr
  tr.appendChild(tdVolume);

  // inclui o tr como filho do tbody
  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
});
