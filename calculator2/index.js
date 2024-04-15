const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0;

for (let index = 1; index <= cantidad; index++) {
    sumatoria = sumatoria + index;
  }

  alert ("el resultado de la suma es:" + sumatoria);