//ejercicio 1. Determinar el rango de edad de un usuario
let edad = 25;
if (edad >= 0 && edad <= 12) {
    console.log("eres un niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("eres un adolescente");
} else if (edad >= 18 && edad <= 60) {
    console.log("eres un adulto");
} else if (edad >= 60) {
    console.log("eres un adulto mayor");
} else {
    console.log("edad no válida");
}

//ejercicio 2. Determinar el numero mayor y el numero menor 
let num1 = 2
let num2 = 4
let num3 = 6

//mayor
if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else if (num2 > num3) {
    console.log(num2)
}
else {
    console.log(num3)
}

//menor
if (num1 < num2 && num1 < num3) {
    console.log(num1)
}
else if (num2 < num3) {
    console.log(num2)
}
else {
    console.log(num3)
}

//ejercicio 3. Determinar triangulos por el valor de sus lados
lado1 = 4
lado2 = 7
lado3 = 2

if (lado1 == lado2 && lado1 == lado3) {
    console.log('Triangulo equilatero')
}
else if (lado1 == lado2 || lado3 == lado2) {
    console.log('triangulo isosceles')

}
else{
    console.log('triangulo escaleno')
}

