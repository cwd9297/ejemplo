function lengthOf(str) {
    if (typeof str !== 'string') {
      return "Invalid input"; // Si el parámetro no es una cadena de texto
    }
  
    if (str === '') {
      return "Invalid input"; // Si la cadena está vacía
    }
  
    return str.length; // Devuelve la longitud de la cadena
  }

    console.log(lengthOf("hello"));
    console.log(lengthOf(""));

    