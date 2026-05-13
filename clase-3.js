//1
let num = 0;
for (let i = 0; num <= 20; i++) {
    console.log(num);
    num = num + 2;
}

//2
const number = 8;
for (let i = 1; i <= 10; i++) {
    let result = number * i
    console.log(result)
}

//3
for (let i = 1; i <= 10; i++) {
    let cuadrado = i * i;
    console.log(cuadrado);
}

//5*4*3*2*1=result
//4
let numero = 5;
let factorial = 1;
for (let i = 2; i <= numero; i++) {
    factorial *= i;
}
console.log(factorial);

//pirmamide con *
let filas=5;
for (let i = filas; i >= 1; i--) {
    let espacios = ' '.repeat(filas - i);
    let estrellas = '*'.repeat(2 * i - 1);
    console.log(espacios + estrellas);
}



