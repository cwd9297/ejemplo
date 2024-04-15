const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;

const mensajeCantidad = frase + cantidad;

console.log (mensajeCantidad);

const fraseMinusculas = frase.toLowerCase(mensajeCantidad);
const fraseMayusculas = frase.toUpperCase(mensajeCantidad);

const minMay = fraseMinusculas + fraseMayusculas;

console.log (minMay);