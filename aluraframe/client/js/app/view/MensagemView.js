class MensagemView extends View {
  constructor(elementoDOM) {
    super(elementoDOM);
  }

  template(modelo) {
    return modelo.texto
      ? `<p class="alert alert-info">${modelo.texto}</p>`
      : `<p/>`;
  }
}
