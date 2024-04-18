function stringIncludes(texto, subtexto) {
    // Verificar si alguna de las cadenas es vacía
    if (texto.length === 0 || subtexto.length === 0) {
        return "Alguna de las cadenas está vacía";
    }

    // Verificar si el subtexto está incluido en el texto
    if (texto.includes(subtexto)) {
        return true;
    } else {
        return false;
    }
}
var texto = "hello world";
var subtexto1 = "Hello";
var subtexto2 = "he";
console.log(stringIncludes(texto, subtexto1));
console.log(stringIncludes(texto, subtexto2));
