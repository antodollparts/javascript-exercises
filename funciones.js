// Seguimiento de libros

let librosLeidos = ['El mago de Oz', 'El fantasma de Canterville']

function agregarLibro(titulo){
 librosLeidos.push(titulo)
}

function mostrarLibrosLeidos(){
    for (libros of librosLeidos){
        console.log(libros)
    }
}

agregarLibro('El principito')
mostrarLibrosLeidos()
