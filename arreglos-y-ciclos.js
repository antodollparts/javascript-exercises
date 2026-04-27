// SOLUCION CON CICLO FOR
//arreglo de frutas
let frutas = ['manzana', 'fresa', 'durazno', 'sandia', 'durazno'];

//creacion de un objeto para almacenar cantidad de frutas
const cantidad = {}

for (let i = 0; i < frutas.length; i++) {

  const fruta = frutas[i];

  if (cantidad[fruta]) {
    cantidad[fruta]++;       // si ya existe, suma 1
  } else {
    cantidad[fruta] = 1;     // si no existe, inicia en 1
  }
}

//  imprimir resultados
console.log("=== Conteo con FOR ===");
for (let fruta in cantidad) {
  console.log(`${fruta}: ${cantidad[fruta]}`);
}


// SOLUCION CICLO WHILE

const cantidadFrutas = {}

let i = 0;
while (i < frutas.length) {
  const fruit = frutas[i];

  if (cantidadFrutas[fruit]) {
    cantidadFrutas[fruit]++;
  } else {
    cantidadFrutas[fruit] = 1;
  }

  i++; 
}

// imprimir resultados
console.log("=== Conteo con WHILE ===");
for (let fruit in cantidadFrutas) {
  console.log(`${fruit}: ${cantidadFrutas[fruit]}`);
}