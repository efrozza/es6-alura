class NegociacaoService {
  constructor() {
    this._httpService = new HttpService();
  }
  //
  obterNegociacoesDaSemana() {
    return new Promise((resolve, reject) => {
      this._httpService
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              negociacao =>
                new Negociacao(
                  new Date(negociacao.data),
                  negociacao.quantidade,
                  negociacao.valor,
                ),
            ),
          );
        })
        .catch(erro => {
          console.log(erro);
          reject('Erro na solicatação AJAX - semana');
        });
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    return new Promise((resolve, reject) => {
      this._httpService
        .get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              negociacao =>
                new Negociacao(
                  new Date(negociacao.data),
                  negociacao.quantidade,
                  negociacao.valor,
                ),
            ),
          );
        })
        .catch(erro => {
          console.log(erro);
          reject('Erro na solicatação AJAX - semana');
        });
    });
  }

  obterNegociacoesDaSemanaRetrasada() {
    return new Promise((resolve, reject) => {
      this._httpService
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(
            negociacoes.map(
              negociacao =>
                new Negociacao(
                  new Date(negociacao.data),
                  negociacao.quantidade,
                  negociacao.valor,
                ),
            ),
          );
        })
        .catch(erro => {
          console.log(erro);
          reject('Erro na solicatação AJAX - semana');
        });
    });
  }
}
