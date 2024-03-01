
export default class Vehicule {

    constructor ( 
    readonly id: String,
    readonly model: String,
    readonly year: Number,
    readonly brand: String,
    readonly price: Number,
    readonly urlImage?: String
    ) {}
}