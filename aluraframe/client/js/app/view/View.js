class View {
  constructor(elementoDOM) {
    this._elementoDOM = elementoDOM;
  }

  template() {
    throw new Error('O metodo deve ser implementado');
  }

  update(modelo) {
    this._elementoDOM.innerHTML = this.template(modelo);
  }
}
