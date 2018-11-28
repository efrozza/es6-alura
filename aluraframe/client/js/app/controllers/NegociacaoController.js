class NegociacaoController {
  constructor() {
    // obtem os dados do form pelo seletor de id
    // o _ indica que o campo não deve ser acessado diretamente
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView(
      document.querySelector('#negociacoesView'),
    );
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView(
      document.querySelector('#mensagemView'),
    );
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    //
    event.preventDefault();
    // adciona a negociaçao
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociação adicionada com sucesso!';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
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
