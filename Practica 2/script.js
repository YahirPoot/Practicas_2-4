class Factorial {
    constructor(numerofac) {
        this.numerofacfino = numerofac;
    }

    calcularFactorial (numerofac){
        if (numerofac === 0 || numerofac === 1) {
            return 1;
        } else {
            return numerofac * this.calcularFactorial(numerofac - 1);
        }
    }
}

class Fibonacci {
    constructor (numerofino) {
        this.numerofino = numerofino;
    }

    calcularFibonacci(numerofino) {
        if (numerofino <= 0) {
            return 0;
        } else if (numerofino === 1) {
            return 1;
        } else {
            return this.calcularFibonacci(numerofino - 1) +this.calcularFibonacci(numerofino - 2)
        }
    }
}

class MCD {
    constructor (valorA, valorB) {
        this.valorA = valorA;
        this.valorB = valorB;
    }

    calcularMCD(valorA, valorB) {
        if(valorB === 0){
            return valorA;
        } else {
            return this.calcularMCD(valorB, valorA % valorB);
        }
    }
}

function calcularOperacion() {
    const operacion = document.getElementById("operacion").value;
    const resultadoDiv = document.getElementById("resultado");
    const factorialInputs = document.getElementById("factorial-inputs");
    const fibonacciInputs = document.getElementById("fibonacci-inputs");
    const mcdInputs = document.getElementById("mcd-inputs");

    factorialInputs.style.display = "none";
    fibonacciInputs.style.display = "none";
    mcdInputs.style.display = "none";
    resultadoDiv.style.display = "none";

    let operacionElegida;

    switch (operacion.toLowerCase()) {
        case "factorial":
            factorialInputs.style.display = "block";
            const numeroFactorial = parseFloat(document.getElementById("numerofac").value);
            operacionElegida = new Factorial(numeroFactorial);
            const resultadoFactorial = operacionElegida.calcularFactorial(numeroFactorial);
            resultadoDiv.innerHTML = `El factorial de ${numeroFactorial} es ${resultadoFactorial}`;
            break;

        case "fibonacci":
            fibonacciInputs.style.display = "block";
            const numeroFinobacci = parseFloat(document.getElementById("numerofino").value);
            operacionElegida = new Fibonacci(numeroFinobacci);
            const resultadoFinobacci = operacionElegida.calcularFibonacci(numeroFinobacci);
            resultadoDiv.innerHTML = `La sereie Finobacci de ${numeroFinobacci} es: ${resultadoFinobacci}`;
            break;

        case "mcd":
            mcdInputs.style.display = "block";
            const valorA = parseFloat(document.getElementById("valorA").value);
            const valorB = parseFloat(document.getElementById("valorB").value);
            operacionElegida = new MCD(valorA, valorB);
            const resultadoMCD = operacionElegida.calcularMCD(valorA, valorB);
            resultadoDiv.innerHTML = `El MCD de ${valorA} y ${valorB} es ${resultadoMCD}`;
            break;

        default:
            resultadoDiv.innerHTML = "Error al elegir la operación";
            break;
    }

    resultadoDiv.style.display = "block";
}

function mostrarCampos() {
    const operacion = document.getElementById("operacion").value;
    const factorialInputs = document.getElementById("factorial-inputs");
    const fibonacciInputs = document.getElementById("fibonacci-inputs");
    const mcdInputs = document.getElementById("mcd-inputs");

    // Ocultar todos los campos de entrada
    factorialInputs.style.display = "none";
    fibonacciInputs.style.display = "none";
    mcdInputs.style.display = "none";

    // Mostrar los campos relevantes según la operación seleccionada
    if (operacion === "factorial") {
        factorialInputs.style.display = "block";
    } else if (operacion === "fibonacci") {
        fibonacciInputs.style.display = "block";
    } else if (operacion === "mcd") {
        mcdInputs.style.display = "block";
    }
}