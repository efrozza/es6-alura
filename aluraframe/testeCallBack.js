function testeCallBack() {
  console.log('1 - entrou na funcao testeCallBack ');
  console.log('2 - chamou funcaoQueDevolveCallBack ');
  funcaoQueDevolveCallBack((erro, dados) => {
    console.log('4 - voltou para testeCallBack com os dados recebidos');
    if (erro) {
      console.log('5 - apresenta erro');
      console.log('Mensagem de erro: ' + erro);
      return;
    }
    dados.map(dado => {
      console.log('5 - apresenta os dados retornados');
      console.log(dado);
    });
  });
}

function funcaoQueDevolveCallBack(funcaoCallBack) {
  console.log('3 - entrou na funcaoQueDevolveCallBack ');

  carros = ['civic', 'cruise', 'corolla'];

  // retona a chamada a função passando os parametros esperados
  return funcaoCallBack(null, carros);
}

testeCallBack();
