class Calculator {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    raizCuadrada(a) {
        if (a < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
        }
        return Math.sqrt(a);
    }

    raizCubica(a) {
        return Math.cbrt(a);
    }

    potencia(a, b) {
        return Math.pow(a, b);
    }

    realizarOperacion() {
        const operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division, raizCuadrada, raizCubica, potencia)");
        let num1, num2;
        if (operacion !== "raizCuadrada" && operacion !== "raizCubica") {
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
        } else {
            num1 = parseFloat(prompt("Ingrese el número:"));
        }

        let resultado;
        switch (operacion) {
            case "suma":
                resultado = this.sumar(num1, num2);
                break;
            case "resta":
                resultado = this.restar(num1, num2);
                break;
            case "multiplicacion":
                resultado = this.multiplicar(num1, num2);
                break;
            case "division":
                resultado = this.dividir(num1, num2);
                break;
            case "raizCuadrada":
                resultado = this.raizCuadrada(num1);
                break;
            case "raizCubica":
                resultado = this.raizCubica(num1);
                break;
            case "potencia":
                resultado = this.potencia(num1, num2);
                break;
            default:
                resultado = "Operación no válida";
        }
        
        alert("El resultado de la operación " + operacion + " es: " + resultado);
    }
}

// Ejemplo de uso
const calculadora = new Calculator();
calculadora.realizarOperacion();
