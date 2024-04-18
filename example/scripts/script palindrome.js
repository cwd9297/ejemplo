function palindrome(text) {
    // Eliminar los espacios en blanco y convertir la cadena a minúsculas
    var cleanText = text.replace(/\s/g, "").toLowerCase();
    
    // Dividir la cadena en un array de caracteres
    var charArray = cleanText.split("");
    
    // Invertir el array de caracteres
    var reversedArray = charArray.reverse();
    
    // Unir los caracteres invertidos en una cadena
    var reversedText = reversedArray.join("");
    
    // Verificar si la cadena original es igual a la cadena invertida
    if (cleanText === reversedText) {
        return true;
    } else {
        return false;
    }
}

var texto1 = "hello";
var texto2 = "hannah";

console.log(palindrome(texto1)); // Salida: false 
console.log(palindrome(texto2)); // Salida: true
