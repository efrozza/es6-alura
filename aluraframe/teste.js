testeCallBack();

function testeCallBack() {
  console.log('entrou testeCallBack');
  funcComCallBack((err, arrayTimes) => {
    if (err) {
      console.log('Ocorreu um erro!');
      console.log('Descrição do erro: ' + err);
      return;
    }
    arrayTimes.map(time => console.log(time));
  });
}

function funcComCallBack(funcaoPassada) {
  console.log('entrou funcComCallBack');
  console.log('realiza as operações da função');
  const times = ['inter', 'gremio', 'flamengo'];
  // chama a função passada como parametro
  funcaoPassada('erro no acesso ao banco de dados', times);
}
