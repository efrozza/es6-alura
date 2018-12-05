class NegociacaoController {
  constructor() {
    // obtem os dados do form pelo seletor de id
    // o _ indica que o campo não deve ser acessado diretamente
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');

    this._listaNegociacoes = ProxyFactory.create(
      new ListaNegociacoes(),
      ['adiciona', 'esvazia'],
      modelo => this._negociacoesView.update(modelo),
    );

    // cria a view indicando qual o elemento do Dom que irá tratar essa view
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

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    //
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociação adicionada com sucesso!';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
  }

  importarNegociacoes() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // converte texto para um objeto JS
          JSON.parse(xhr.responseText)
            .map(
              negociacaoServidor =>
                new Negociacao(
                  new Date(negociacaoServidor.data),
                  negociacaoServidor.quantidade,
                  negociacaoServidor.valor,
                ),
            ) // map gera um novo array de objetos do tipo Negociacao a partir do json recebido
            .map(negociacao => this._listaNegociacoes.adiciona(negociacao));
          this._mensagem.texto = 'Negociações importadas com sucesso';
          this._mensagemView.update(this._mensagem);
        } else {
          console.log('Não foi possível carregar negociações');
          console.log(xhr.responseText);
          this._mensagem.texto = 'Não foi possível carregar negociações';
          this._mensagemView.update(this._mensagem);
        }
      }
    };
    xhr.send();
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
