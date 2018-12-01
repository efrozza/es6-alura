const objetoCarro = {
  modelo: 'civic',
  ano: '2017',
  cor: 'preto',
  andar: () => console.log('carro andando'),
};
const prop = 'andar';
objetoCarro[prop]();
console.log(objetoCarro['ano']);
console.log(objetoCarro.cor);
