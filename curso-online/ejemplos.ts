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
    private preciocio: number;
    private cliente: Cliente;
    public constructor(nom:string, precio:number, cli:Cliente) {
        this.name = nom; 
        this.preciocio = precio;
        this.cliente = cli;
    }
    public setPreciocio(preciocio:number): void {
        this.preciocio = preciocio;
    }
    public getPreciocio():number{
        return this.preciocio;
    }
}
class Cd extends Disco {
    constructor(name:string, precio:number, cli:Cliente) {
        super(name,precio,cli);
    }
}
class Dvd extends Disco {
    constructor(name:string, precio:number , cli:Cliente) {
        super(name,precio,cli);
    }
}
class Blueray extends Disco {
    constructor(name: string, precio:number, cli:Cliente) {
        super(name,precio,cli);
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
        let monto = this.producto.preciocio;
        console.log(monto);
        return monto;
    }
}
let ventas: Array<Venta>;
let venta1: Venta = new Venta(cd1,cliente);
let venta2: Venta = new Venta(blu3,cliente);
let venta3: Venta = new Venta(blu2,cliente);
venta1.montoVenta();
ventas.push(venta1);
ventas.push(venta2);
ventas.push(venta3);

export class Tienda {
    private venta = Venta[];
    private nombreT: string;
    public constructor (nombre: string) {
        this.nombreT = nombre;
        this.venta = [];
    }
    public totalVentaCd(venta:Venta): void {
        this.venta.push(venta);
    }
    public calVentaCd():number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod =this.venta[i].producto
            //if (prod instanceof Cd) {
              //  suma += prod.preciocio
            //}
            return suma;
        }
    }
}
let tienda1:Tienda = new Tienda("center");
tienda1.totalVentaCd(venta1);
tienda1.totalVentaCd(venta2);
tienda1.totalVentaCd(venta3);
let ingresosCds = tienda1.calVentaCd();
console.log("los ingresos de la venta son ",ingresosCds,"Bs");

