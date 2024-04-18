const comprar = () => {
    let totalApagar = 0; // Cambiado de const a let
    for (let index = 1; index <= 3; index++) {
        const nombre = prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        const subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;
    }
    console.log(totalApagar);
    return totalApagar;
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;
console.log("Total de todas las compras:", total);


    
