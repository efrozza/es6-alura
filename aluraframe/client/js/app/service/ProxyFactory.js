// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

class ProxyFactory {
  // Factory recebe o objeto a ser tratado, quais props e qual ação executar
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      // sempre que tentarmos ler uma propriedade do objeto o get é disparado
      // target - referencia ao objeto original
      // prop - propriedade acessada
      // receiver - referência para o proxy
      get(target, prop, receiver) {
        if (props.includes(prop) && typeof target[prop] == typeof Function) {
          return function() {
            Reflect.apply(target[prop], target, arguments);
            return acao(target);
          };
        }
        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        if (props.includes(prop)) {
          target[prop] = value;
          acao(target);
        }
        return Reflect.set(target, prop, value, receiver);
      },
    });
  }
}
