//Evaluador de notas con mensajes personalizados

const nota = Math.floor(Math.random() * 101) //Genera una nota aleatoria entre 0 y 100

//Función para evaluar la nota
function evaluarNota(nota) {
    if (nota > 0) {
        if (nota >= 90) {
            console.log("Excelente, tu nota es: " + nota)
        }
        else if(nota>=75 && nota<=89 ){
            console.log("Bien, tu nota es: " + nota)
        }
        else if(nota>=60 && nota<=74){
            console.log("Suficiente, tu nota es: " + nota)
        }
        else {
            console.log("No aprobado, tu nota es: " + nota)
        }
    }
    else {
        console.log("Nota inválida menor a 0")
    }
}

evaluarNota(nota)