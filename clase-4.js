//area de un triangulo
function calcularArea(altura, base) {
    let area = (base * altura) / 2
    return area
}

console.log(calcularArea(7, 5))

//multiplicar 3 numeros y decir cual es el mayor
function multiplicarNumeros(a, b, c) {
    if (a > b && a > c) {
        console.log(`El numero mayor es: ${a}`)
    }
    else if (b > c) {
        console.log(`El numero mayor es: ${b}`)
    }
    else {
        console.log(`El numero mayor es: ${c}`)
    }

    console.log(a * b * c)
}

multiplicarNumeros(2, 3, 4)

//saludar 
function saludar(nombre) {
    console.log("Hola " + nombre)
}

saludar("anto")

//dividir dos numeros
function dividirNumeros(num1, num2) {
    if (num2 == 0) {
        console.log("No es posible dividir entre cero")
    }
    console.log(num1 / num2)
}

dividirNumeros(10, 5)

// es par o impar?
function determinarParOImpar(num) {
    if (num % 2 == 0) {
        console.log("El numero es par")
    }
    else {
        console.log("El numero es impar")
    }
}

determinarParOImpar(10)

