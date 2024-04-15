let totalApagar = 0;
const cantidadProductos = Number(prompt("¿Cuántos productos desea llevar?"));

for (let index = 1; index <= cantidadProductos; index++) {
    const nombre = prompt(`Producto ${index}: ¿Cuál es el nombre del producto?`);
    const cantidad = Number(prompt(`Producto ${index}: ¿Cuántas unidades de ${nombre} desea llevar?`));
    const precio = Number(prompt(`Producto ${index}: ¿Cuál es el precio unitario de ${nombre}?`));
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
}

console.log("El total a pagar es:", totalApagar);
alert("El total a pagar es:" + totalApagar);
