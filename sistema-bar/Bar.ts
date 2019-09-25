/**
 * Concepto: los atributos son las carecteristicas individuales que diferencia un objetode otro
 * y determinan su apariencia,estado u otras cualidades. los atributos se guardan en variables
 * denominadasde instancia, y cadaobjeto particular puede tener valores distintos para esta variable
 */
export class Bar{
    private nombre: string;
    private capacidad: number;
    constructor (nom:string, cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setCapacidad(cap: number): void {
        this.capacidad = cap;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
}
export class BarMan{
    private nombre: string;
    private apellido: string;
    constructor (nom:string, apell:string){
        this.nombre = nom;
        this.apellido = apell;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setApellido(apell: string): void {
        this.apellido = apell;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
}
export class Trago{
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor (nom:string,color:string,cant:number){
        this.nombre = nom;
        this.color = color;
        this.cantidad =cant;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setColor(color: string):void {
        this.color = color
    }
    public setCantidad(cant: number): void {
        this.cantidad = cant;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getColor(): string {
        return this.color;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
}
let bar1:Bar = new Bar("Nueva Era",50);
let bar2:Bar = new Bar("El Barto",60);
console.log(bar1);
console.log(bar2);
let BarMan1:BarMan = new BarMan("Rodrigo","Zenteno");
console.log(BarMan1);
let trago1:Trago = new Trago("Channdeler","Cafe",120 );
console.log(trago1);
bar1.setNombre("Luna Nueva");
console.log(bar1.getNombre());
bar1.setCapacidad(80);
console.log(bar1.getCapacidad());
BarMan1.setNombre("Benjamin");
console.log(BarMan1.getNombre());
BarMan1.setApellido("Sosa");
console.log(BarMan1.getApellido());
trago1.setNombre("Whisky");
console.log(trago1.getNombre());
trago1.setColor("azul");
console.log(trago1.getColor());
trago1.setCantidad(140);
console.log(trago1.getCantidad());





