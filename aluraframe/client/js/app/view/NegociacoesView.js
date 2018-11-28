class NegociacoesView extends View {
  constructor(elementoDOM) {
    super(elementoDOM);
  }

  template(modelo) {
    return `<table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
      
        <tbody>
        
        ${modelo.negociacoes
          .map(
            negoc =>
              ` <tr>
                    <td>${DateHelper.dataParaTexto(negoc.data)}</td>
                    <td>${negoc.quantidade}</td>
                    <td>${negoc.valor}</td>                        
                    <td>${negoc.volume}</td>
                </tr>`,
          )
          .join('')}
        
        </tbody>
      
        <tfoot>
            <td colspan="3"></td>
            <td>${modelo.negociacoes.reduce((total, negoc) => {
              return total + negoc.volume;
            }, 0)}                
            </td>
        </tfoot>
      </table>`;
  }
}
