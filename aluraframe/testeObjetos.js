const objetoCarro = {
  modelo: 'civic',
  ano: '2017',
  cor: 'preto',
  andar: () => console.log('carro andando'),
};
const prop = 'andar';
// acessa propriedade do objeto, como é uma função já pode ser acessada atraves do ()
objetoCarro[prop]();
console.log(objetoCarro['ano']);
// acesas propriedade do objeto da forma padrao
console.log(objetoCarro.cor);

class Cesta {
  constructor(tipo, ...itens) {
    console.log(tipo);
    console.log(itens);
  }
}

let cesta = new Cesta('fruta', 'banana', 'tomate', 'maçã');

let d = Array.from('abc');
console.log(d);
