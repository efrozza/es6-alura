class Negociacao {
  constructor(data, quantidade, valor) {
    // o _ indica que só a classe deveria acessar esses atributos
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    // congela a instancia da classe, não podento alterar os atributos diretamente
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    console.log('entrou aqui');
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
