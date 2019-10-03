import { BluRay } from "./prueba2";

//resuelva el siguiente ejercicio usando programacion orientada objetos y herencia: se necesita
//implementar un sistema para la venta de peliculas en formatos cd ,dvd, blu-ray, donde debe estar involucrado 
//el cliente, se debe guardar cds,dvds,blue-rays en una misma lista se debe calcular el monto total
//percibido por la venta de cds,dvds,blue-ray
//los 3 tipos de disco deben guardar en una lista.
export class Cliente {
    private name:string;
    public constructor(name:string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
abstract class Disco {
    private name: string;
    precio: number;
    private cliente: Cliente;
    public constructor(nom:string, pre:number, cli:Cliente) {
        this.name = nom; 
        this.precio = pre;
        this.cliente = cli;
    }
    public setPrecio(precio:number): void {
        this.precio = precio;
    }
    public getPrecio():number{
        return this.precio;
    }
}
class Cd extends Disco {
    constructor(name:string, pre:number, cli:Cliente) {
        super(name,pre,cli);
    }
}
class Dvd extends Disco {
    constructor(name:string, pre:number , cli:Cliente) {
        super(name,pre,cli);
    }
}
class Blueray extends Disco {
    constructor(name: string, pre:number, cli:Cliente) {
        super(name,pre,cli);
    }
}

let cliente:Cliente = new Cliente("Rodrigo"); 
let cd1:Disco = new Cd("Spiderman",5,cliente);
let cd2:Disco = new Cd("D Fragments",8,cliente);
let dvd1:Disco = new Dvd("X-men",10,cliente);
let dvd2:Disco = new Dvd("Gintama",350,cliente);
let blu1:Disco = new Blueray("End Game",12,cliente);
let blu2:Disco = new Blueray("Fate Stay Night",30,cliente);
let blu3:Disco = new Blueray("Haven's Fell",15,cliente); 
console.log(cd1);
console.log(cd2);
console.log(dvd1);
console.log(dvd2);
console.log(blu1);
console.log(blu2);
console.log(blu3);

export class Venta {
    producto: Disco;
    cliente: Cliente;
    constructor(producto:Disco, cliente:Cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    montoVenta(): number{
        let monto = this.producto.getPrecio();
        return monto;
    }
}
let venta: Array<Venta>;
let venta1: Venta = new Venta(cd1,cliente);
let venta2: Venta = new Venta(blu3,cliente);
let venta3: Venta = new Venta(blu2,cliente);
venta1.montoVenta();
venta2.montoVenta();
venta3.montoVenta();
export class Tienda {
    private venta: Venta[];
    private nombreT: string;
    public constructor (nombret: string) {
        this.nombreT = nombret;
        this.venta = [];
    }
    public totalVentaCd(venta1:Venta): void {
        this.venta.push(venta1);
    }
    public calVentaCd():number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod =this.venta[i].producto
            suma += prod.precio;
            return suma;
        }
    }
    calVentaDvd(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Dvd) {
                suma += prod.precio;
            }
        }
        return suma;
    }

    calcularVentaBluRay(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof BluRay) {
                suma += prod.precio;
            }
        }
        return suma;
    }

    totalVentas(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            suma += prod.precio;
        }
        return suma;
    }
}
let tienda1:Tienda = new Tienda("center");
tienda1.totalVentaCd(venta1);
tienda1.totalVentaCd(venta2);
tienda1.totalVentaCd(venta3);
console.log(tienda1);

let ingresoscds = tienda1.calVentaCd();
let ingresosdvd = tienda1.calVentaDvd();
let ingresosbluray = tienda1.calcularVentaBluRay();
console.log("los ingresos de la venta son ",ingresoscds,"Bs");
console.log(ingresosdvd);
console.log(ingresosbluray);

