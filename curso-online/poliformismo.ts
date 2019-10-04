/**
 * elaborar 2 ejemplos usando clases de herencia 
 * elaborar 2 ejemplos usando clases abstracta
 * elaborar 3 ejemplos aplicando poliformismo
 */
export class Pelota {
    private nombre: string;
    private tamaño: string;
    private color: string;
    public constructor(nombre: string, tamaño:string, color:string) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.color = color;
    }
}
export class PelotaTenis extends Pelota {
    constructor(nombre:string, tamaño:string, color:string){
        super(nombre,tamaño,color);
    }
}
export class pelotaGolf extends Pelota {
    constructor(nombre:string, tamaño:string, color:string) {
        super(nombre,tamaño,color)
    }
}
export class PelotaBasketball extends Pelota {
    constructor(nombre: string, tamaño: string, color:string) {
        super(nombre,tamaño,color);
    }
}
export class PelotaFutbol extends Pelota {
    constructor(nombre:string, tamaño:string, color:string) {
        super(nombre,tamaño,color);
    }
}
let pelota1:Pelota = new PelotaTenis("Pelota de Tenis","68 Milimetros","Amarillo con franja Blasca");
let pelota2:Pelota = new pelotaGolf("Pelota de Golf","42 Milimetros","Blanco");
let pelota3:Pelota = new PelotaBasketball("PelotaBasketball","78 Centimetros","Naranja con franja Negra");
let pelota4:Pelota = new PelotaFutbol("Pelota de Futbol","70 Centimetros","Blanco con Puntos Negros");
console.log(pelota1);
console.log(pelota2);
console.log(pelota3);
console.log(pelota4);

export abstract class Celulares {
    private marca: string;
    private modelo:string;
    private tamaño:string;
    constructor(marca:string, modelo:string, tamaño:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.tamaño = tamaño;
    }
    abstract getPrecio();
}
export class Sansum extends Celulares {
    constructor(marca:string, modelo:string, tamaño:string) {
        super(marca,modelo,tamaño);
    }
    public getPrecio():number {
        let precio:number = 1500;
        return precio;
    }
}
export class Motorola extends Celulares {
    constructor(marca:string, modelo:string, tamaño:string) {
        super(marca,modelo,tamaño);
    }
    public getPrecio(): number {
        let precio: number = 1200;
        return precio;
    }
}
export class LG extends Celulares {
    constructor(marca:string, modelo:string, tamaño:string) {
        super(marca,modelo,tamaño);
    }
    public getPrecio(): number {
        let precio:number = 1400
        return precio;
    }
}
export class Nokia extends Celulares {
    constructor(marca:string, modelo:string, tamaño:string) {
        super(marca,modelo,tamaño);
    }
    public getPrecio(): number {
        let precio:number = 1850;
        return precio;
    }
}
let cell1:Celulares = new Sansum("Samsum","S4","5 Pulgadas");
let cell2:Celulares = new Motorola("Motorola","Moto Z4","4 Pulgadas");
let cell3:Celulares = new LG("LG","K50S","6 Pulgadas");
let cell4:Celulares = new Nokia("NokiaX","110(2019)","5.5 Pulgadas");
let precio1:Celulares = cell1.getPrecio();
let precio2:Celulares = cell2.getPrecio();
let precio3:Celulares = cell3.getPrecio();
let precio4:Celulares = cell4.getPrecio();
console.log("El Precio de Celular Samsun es:",precio1);
console.log("El Precio de Celular Motorola es:",precio2);
console.log("El Precio de Celular LG es:",precio3);
console.log("El Precio de Celular Nokia es:",precio4);

export class Electrodomesticos {
    private nombre: string;
    private precio: number;
    private marca: string;
    public constructor(nombre:string, precio:number, marca:string) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
}
export interface ConeccionInternet {
    navegar():string;
}
export interface CalientaComida {
    calienta(): string;
}
export interface Atempera {
    atempera(): string;
}
export interface Limpia {
    limpia(): string;
}
export interface Informacion {
    inf(): string;
}

export class Televisor extends Electrodomesticos implements ConeccionInternet, Informacion  {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca)
    }
    navegar(): string {
        return "El telivesor tiene Smart tiene acceso a la Navegacion";
    }
    inf(): string {
        return "El televisor recibe informacion"
    }
}
export class Computadora extends Electrodomesticos implements ConeccionInternet, Informacion {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    navegar(): string {
        return "La Computadora tiene distintas entradas al Navegador";
    }
    inf(): string {
        return "La computadora recibe y da informacion"
    }
}
export class Refrigerador extends Electrodomesticos implements Atempera, Informacion {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    atempera(): string {
        return "El refrigerador tiene la funcion de enfriar y conservar los producctos";
    }
    inf(): string {
        return "El refrigerador recibe informacion"
    }
}
export class Lavadora extends Electrodomesticos implements Limpia, Informacion {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    limpia(): string {
        return "La lavadora se encarga de la lavar a repa";
    }
    inf(): string {
        return "La lavadora recibe informacion"
    }
}
export class Cocina extends Electrodomesticos implements CalientaComida {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    calienta(): string {
        return "La cocina tiene 6 Hornillas con las cuales calientan o cocinan la comida"
    }
}
export class PLancha extends Electrodomesticos {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    limpia(): string {
        return "la plancha se encarga planchar y desinfectar"
    }
}
export class Smartphone extends Electrodomesticos implements ConeccionInternet, Informacion {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    navegar(): string {
        return "El smartphone tiene conecciones Inalambricas"
    }
    inf(): string {
        return "El smartphone recibe y manda informacion"
    }
}
export class Microonda extends Electrodomesticos implements CalientaComida {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    calienta(): string {
        return "El microonda tiene la funcion de calentar o llegar a cocinar a altas temperaturas"
    }
}
export class Ventilador extends Electrodomesticos implements Atempera {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    atempera(): string {
        return "El ventilador Atempera el ambiente cuando hace calor"
    }
}
export class Calefactor extends Electrodomesticos implements Atempera {
    constructor(nombre:string, precio:number, marca:string) {
        super(nombre,precio,marca);
    }
    atempera(): string{
        return "El calefactor calienta el ambiente en tiempos de frio"
    }
}
let electro1:Televisor = new Televisor("Televisor",2500,"LG");
let electro2:Computadora = new Computadora("Computadora PC",4500,"HP");
let electro3:Refrigerador = new Refrigerador("Refrigerador",3000,"Master");
let electro4:Lavadora = new Lavadora("LavadoraXp",6500,"Stetic");
let electro5:Cocina = new Cocina("Cocina",3000,"Master");
let electro6:PLancha = new PLancha("Plancha",1500,"MacQ");
let electro7:Smartphone = new Smartphone("SmarohoneApple",4500,"Apple");
let electro8:Microonda = new Microonda("Microondas",3200,"Lmist");
let electro9:Ventilador = new Ventilador("ventilador",1200,"VentiMax");
let electro10:Calefactor = new Calefactor("Calefactor",800,"Master Bio");
console.log(electro1.navegar());
console.log(electro1.inf());
console.log(electro2.navegar());
console.log(electro2.inf());
console.log(electro3.atempera());
console.log(electro3.inf());
console.log(electro4.inf());
console.log(electro4.limpia());
console.log(electro5.calienta());
console.log(electro6.limpia());
console.log(electro7.inf());
console.log(electro7.navegar());
console.log(electro8.calienta());
console.log(electro9.atempera());
console.log(electro10.atempera());
