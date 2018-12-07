class NegociacaoService {
  //
  obterNegociacoesDaSemana() {
    return new Promise((resolve, reject) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/semana');

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(
              null, // err recebe null
              // devolve uma lista de objetos do tipo negociacao
              JSON.parse(xhr.responseText).map(
                negociacaoServidor =>
                  new Negociacao(
                    new Date(negociacaoServidor.data),
                    negociacaoServidor.quantidade,
                    negociacaoServidor.valor,
                  ),
              ),
            );
          } else {
            console.log(xhr.responseText);
            reject('Erro na solicatação AJAX - semana', null);
          }
        }
      };
      xhr.send();
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/anterior');

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(
              null, // err recebe null
              // devolve uma lista de objetos do tipo negociacao
              JSON.parse(xhr.responseText).map(
                negociacaoServidor =>
                  new Negociacao(
                    new Date(negociacaoServidor.data),
                    negociacaoServidor.quantidade,
                    negociacaoServidor.valor,
                  ),
              ),
            );
          } else {
            console.log(xhr.responseText);
            reject('Erro na solicatação AJAX - semana anterior', null);
          }
        }
      };
      xhr.send();
    });
  }

  obterNegociacoesDaSemanaRetrasada() {
    new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'negociacoes/retrasada');

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(
              null, // err recebe null
              // devolve uma lista de objetos do tipo negociacao
              JSON.parse(xhr.responseText).map(
                negociacaoServidor =>
                  new Negociacao(
                    new Date(negociacaoServidor.data),
                    negociacaoServidor.quantidade,
                    negociacaoServidor.valor,
                  ),
              ),
            );
          } else {
            console.log(xhr.responseText);
            reject('Erro na solicatação AJAX - semana retrasada', null);
          }
        }
      };
      xhr.send();
    });
  }
}
