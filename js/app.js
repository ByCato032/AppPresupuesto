const ingresos = [
  new Ingreso("Salario", 2100.0),
  new Ingreso("Venta coche", 1500.0),
];

const egresos = [
  new Egreso("Renta departamento", 900.0),
  new Egreso("Ropa", 400.0),
];

let cargarApp = () => {
  cargarCabecero();
};

let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};
let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentajeE").innerHTML =
    formatoMoneda(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(totalEgresos());
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = () => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};
