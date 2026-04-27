class Auto {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }
    
    showinfo(){
        console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Año: ${this.year} `)
    }
}

const automovil = new Auto('Mercedes-benz','GLE', '2023' )
console.log(automovil)