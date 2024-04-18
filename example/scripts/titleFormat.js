function titleFormat(text) {
    // Verificar si el texto está vacío
    if (text.length === 0) {
        return "El texto está vacío";
    }

    // Obtener la primera letra del texto y convertirla a mayúscula
    var firstLetter = text.charAt(0).toUpperCase();
    
    // Obtener el resto del título y convertirlo a minúsculas
    var restOfTitle = text.slice(1).toLowerCase();

    // Concatenar la primera letra en mayúscula con el resto del título en minúsculas
    var formattedTitle = firstLetter + restOfTitle;

    return formattedTitle;
}
var titulo = "ejemplo de títULO";
console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));


