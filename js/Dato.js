class Dato {
  constructor(descripcion, valor) {
    this.descripcion = descripcion;
    this.valor = valor;
  }
  getDescripcion() {
    return this.descripcion;
  }
  getValor() {
    return this.valor;
  }
  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }
  setValor(valor) {
    this.valor = valor;
  }
}
