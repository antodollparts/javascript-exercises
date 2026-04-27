//Crear objeto a partir de un libro

class Libro {
    constructor(titulo, autor, anio, estado, capitulos){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.estado = estado
        this.capitulos = capitulos
    }
    
    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`)
    }

    agregarCapitulo(cap){
        this.capitulos.push(cap)
    }

    eliminarCapitulo(){
        this.capitulos.pop()
    }


}

const libro = new Libro ('El principito', 'Antoine de Saint-Exupéry', 1943, 'disponible', [1, 2, 3, 4, 5] )

console.log(libro)

libro.describirLibro()

libro.agregarCapitulo(6)
console.log(libro.capitulos)

libro.eliminarCapitulo()
console.log(libro.capitulos)

