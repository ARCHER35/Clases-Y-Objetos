/**
 * Concepto: los atributos son las carecteristicas individuales que diferencia un objetode otro
 * y determinan su apariencia,estado u otras cualidades. los atributos se guardan en variables
 * denominadasde instancia, y cadaobjeto particular puede tener valores distintos para esta variable
 */
export class Bar{
    nombre: string;
    capacidad: number;
    constructor (nom:string, cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan{
    nombre: string;
    apellido: string;
    constructor (nom:string, apell:string){
        this.nombre = nom;
        this.apellido = apell;
    }
}
export class Trago{
    nombre: string;
    color: string;
    cantidad: number;
    constructor (nom:string,color:string,cant:number){
        this.nombre = nom;
        this.color = color;
        this.cantidad =cant;
    }
}
let bar1:Bar = new Bar("Nueva Era",50);
let bar2:Bar = new Bar("El Barto",60);
console.log(bar1);
console.log(bar2);
let BarMan1:BarMan = new BarMan("Rodrigo","Zenteno")
console.log(BarMan1);
let trago1:Trago = new Trago("Whisky","Cafe",120);
console.log(trago1);
