class NegociacaoController {
  constructor() {
    // obtem os dados do form pelo seletor de id
    // o _ indica que o campo não deve ser acessado diretamente
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');

    // cira uma atributo para a lista de negociaçoes
    this._listaNegociacoes = ProxyFactory.create(
      new ListaNegociacoes(),
      ['adiciona', 'esvazia'],
      modelo => this._negociacoesView.update(modelo),
    );

    // cria a view indicando qual o elemento do Dom que irá tratar essa view
    this._negociacoesView = new NegociacoesView(
      document.querySelector('#negociacoesView'),
    );

    // atualiza a view de negociações pois o proxy nao roda na primeira vez que o objeto é instanciado
    // roda apenas nas atualizações (adiciona, apaga)
    this._negociacoesView.update(this._listaNegociacoes);

    // cria um proxy para a mensagem
    this._mensagem = ProxyFactory.create(new Mensagem(), ['texto'], modelo =>
      this._mensagemView.update(modelo),
    );
    // cria a view de mensagem
    this._mensagemView = new MensagemView(
      document.querySelector('#mensagemView'),
    );

    // atualiza a view
    this._mensagemView.update(this._mensagem);
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso';
  }

  adiciona(event) {
    //
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociação adicionada com sucesso!';
    this._limpaFormulario();
  }

  importarNegociacoes() {
    // criamos uma instacia do servio que fara a chamada ajax para popular as negociacoes

    let negociacaoService = new NegociacaoService();

    Promise.all([
      negociacaoService.obterNegociacoesDaSemana(),
      negociacaoService.obterNegociacoesDaSemanaAnterior(),
      negociacaoService.obterNegociacoesDaSemanaRetrasada(),
    ])
      .then(negociacoes => {
        console.log(negociacoes);
        negociacoes
          .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
          .map(negociacao => {
            this._listaNegociacoes.adiciona(negociacao);
          });
        this._mensagem.texto = 'Negociações da semana importadas com sucesso';
      })
      .catch(erro => {
        this._mensagem.texto = erro;
      });
  }

  // cria
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value,
    );
  }

  // metodo com _ indica que apenas a classe deve acessalo

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputValor.value = 0;
    this._inputQuantidade.value = 1;
    this._inputData.focus();
  }
}
