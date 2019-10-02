export class Vehiculo {
    private modelo:string;
    precio:number;
    private ruedas:number;
    constructor(modelo:string, precio:number, ruedas:number) {
        this.modelo = modelo;
        this.precio = precio;
        this.ruedas = ruedas;
    }
}
class Toyota extends Vehiculo {
    constructor(modelo:string, precio:number, ruedas:number) {
        super(modelo,precio,ruedas);
    }
}
class Nissan extends Vehiculo {
    constructor(modelo:string, precio:number, ruedas:number) {
        super(modelo,precio,ruedas);
    }
}
class Bmw extends Vehiculo {
    constructor(modelo:string, precio:number, ruedas:number) {
        super(modelo,precio,ruedas);
    }
}
class Chevrolet extends Vehiculo {
    constructor(modelo:string, precio:number, ruedas:number) {
        super(modelo,precio,ruedas);
    }
}
class Volvo extends Vehiculo {
    constructor(modelo:string, precio:number, ruedas:number) {
        super(modelo,precio,ruedas);
    }
}
export class Cliente {
    private nombre:string;
    private apellido:string;
    private correo:string;
    constructor(nombre:string, apellido:string, correo:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
}
export class Venta {
    producto:Vehiculo;
    cliente:Cliente;
    constructor(producto:Vehiculo,cliente:Cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    montoVenta(): number {
        let monto = this.producto.precio;
        console.log(monto);
        return monto;
    }
}
let cliente1:Cliente = new Cliente("Rodrigo","Zenteno","rodrizzzz@.com");
let cliente2:Cliente = new Cliente("Roger","Snow","rogerrrr23@.com");
let cliente3:Cliente = new Cliente("Alber","Einstein","ainstenxdxd@.com");
let cliente4:Cliente = new Cliente("Bob","Claros","bobiddd@gmail.com");
let cliente5:Cliente = new Cliente("Jose","Claros","josejose@.com")
let cliente6:Cliente = new Cliente("Ernesto","Guevarra","sin correo")
let auto1:Vehiculo = new Toyota("Carina",3500,4);
let auto2:Vehiculo = new Toyota("Marino",4500,5);
let auto3:Vehiculo = new Nissan("Juck",5000,5);
let auto4:Vehiculo = new Nissan("Cube",6000,4);
let auto5:Vehiculo = new Bmw("Sedan",8000,4);
let auto6:Vehiculo = new Bmw("Roadster",9000,5);
let auto7:Vehiculo = new Chevrolet("Spark",12000,4);
let auto8:Vehiculo = new Chevrolet("Orlando",14000,5);
let volvo1:Vehiculo = new Volvo("S90",6500,4);
let volvo2:Vehiculo = new Volvo("F5",25000,10);
let venta1:Venta = new Venta(auto1,cliente1);
let venta2:Venta = new Venta(auto2,cliente2); 
let venta3:Venta = new Venta(auto3,cliente3);
let venta4:Venta = new Venta(auto4,cliente4);
let venta5:Venta = new Venta(auto5,cliente5);
let venta6:Venta = new Venta(auto7,cliente1);
let venta7:Venta = new Venta(volvo1,cliente3);
let venta8:Venta = new Venta(auto6,cliente4);
let venta9:Venta = new Venta(auto8,cliente1);
let venta10:Venta = new Venta(volvo2,cliente6)
console.log(venta1);
console.log(venta2);
console.log(venta3);
console.log(venta4);
console.log(venta5);
console.log(venta6);
console.log(venta7);
console.log(venta8);
console.log(venta9);
console.log(venta10);

export class Tienda {
    venta: Venta[];
    nombreTienda: string;
    constructor(nombre: string) {
        this.nombreTienda = nombre;
        this.venta = [];
    }
    realizarVenta(venta: Venta): void {
        this.venta.push(venta);
    }
    calVentaToyota(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Toyota) {
                suma += prod.precio;
            }
        }
        return suma;
    }
    calVentaNissan(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Nissan) {
                suma += prod.precio;
            }
        }
        return suma;
    }
    calVentaBmw(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Bmw) {
                suma += prod.precio;
            }
        }
        return suma;
    }
    calVentaChevrolet(): number {
        let suma = 0;
        for (let i = 0; i <this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Chevrolet) {
                suma += prod.precio;
            }
        }
        return suma;
    }
    calVentaVolvo(): number {
        let suma = 0;
        for (let i = 0; i < this.venta.length; i++) {
            let prod = this.venta[i].producto;
            if (prod instanceof Volvo) {
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
let tiendavehiculos:Tienda = new Tienda("Mall");
tiendavehiculos.realizarVenta(venta1);
tiendavehiculos.realizarVenta(venta2);
tiendavehiculos.realizarVenta(venta3);
tiendavehiculos.realizarVenta(venta4);
tiendavehiculos.realizarVenta(venta5);
tiendavehiculos.realizarVenta(venta6);
tiendavehiculos.realizarVenta(venta7);
tiendavehiculos.realizarVenta(venta8);
tiendavehiculos.realizarVenta(venta9);
tiendavehiculos.realizarVenta(venta10);

let ingToyota = tiendavehiculos.calVentaToyota();
console.log("El ingreso total en ventas de toyota es:",ingToyota);
let ingNissan = tiendavehiculos.calVentaNissan();
console.log("El ingreso total en ventas de Nissan es:",ingNissan);
let ingBmw = tiendavehiculos.calVentaBmw();
console.log("El ingreso total en ventas de Bmw es:",ingBmw);
let ingChevrolet = tiendavehiculos.calVentaChevrolet();
console.log("El ingreso total en ventas de Chevrolet es:",ingChevrolet);
let ingVolvo = tiendavehiculos.calVentaVolvo();
console.log("El ingrso total en ventas de Volvo es:",ingVolvo);
