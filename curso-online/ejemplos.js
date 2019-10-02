"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//resuelva el siguiente ejercicio usando programacion orientada objetos y herencia: se necesita
//implementar un sistema para la venta de peliculas en formatos cd ,dvd, blu-ray, donde debe estar involucrado 
//el cliente, se debe guardar cds,dvds,blue-rays en una misma lista se debe calcular el monto total
//percibido por la venta de cds,dvds,blue-ray
//los 3 tipos de disco deben guardar en una lista.
var Cliente = /** @class */ (function () {
    function Cliente(name) {
        this.name = name;
    }
    Cliente.prototype.getName = function () {
        return this.name;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
var Disco = /** @class */ (function () {
    function Disco(nom, precio, cli) {
        this.name = nom;
        this.preciocio = precio;
        this.cliente = cli;
    }
    Disco.prototype.setPreciocio = function (preciocio) {
        this.preciocio = preciocio;
    };
    Disco.prototype.getPreciocio = function () {
        return this.preciocio;
    };
    return Disco;
}());
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(name, precio, cli) {
        return _super.call(this, name, precio, cli) || this;
    }
    return Cd;
}(Disco));
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(name, precio, cli) {
        return _super.call(this, name, precio, cli) || this;
    }
    return Dvd;
}(Disco));
var Blueray = /** @class */ (function (_super) {
    __extends(Blueray, _super);
    function Blueray(name, precio, cli) {
        return _super.call(this, name, precio, cli) || this;
    }
    return Blueray;
}(Disco));
var cliente = new Cliente("Rodrigo");
var cd1 = new Cd("Spiderman", 5, cliente);
var cd2 = new Cd("D Fragments", 8, cliente);
var dvd1 = new Dvd("X-men", 10, cliente);
var dvd2 = new Dvd("Gintama", 350, cliente);
var blu1 = new Blueray("End Game", 12, cliente);
var blu2 = new Blueray("Fate Stay Night", 30, cliente);
var blu3 = new Blueray("Haven's Fell", 15, cliente);
console.log(cd1);
console.log(cd2);
console.log(dvd1);
console.log(dvd2);
console.log(blu1);
console.log(blu2);
console.log(blu3);
var Venta = /** @class */ (function () {
    function Venta(producto, cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    Venta.prototype.montoVenta = function () {
        var monto = this.producto.preciocio;
        console.log(monto);
        return monto;
    };
    return Venta;
}());
exports.Venta = Venta;
var ventas;
var venta1 = new Venta(cd1, cliente);
var venta2 = new Venta(blu3, cliente);
var venta3 = new Venta(blu2, cliente);
venta1.montoVenta();
ventas.push(venta1);
ventas.push(venta2);
ventas.push(venta3);
var Tienda = /** @class */ (function () {
    function Tienda(nombre) {
        this.venta = Venta[];
        this.nombreT = nombre;
        this.venta = [];
    }
    Tienda.prototype.totalVentaCd = function (venta) {
        this.venta.push(venta);
    };
    Tienda.prototype.calVentaCd = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            //if (prod instanceof Cd) {
            //  suma += prod.preciocio
            //}
            return suma;
        }
    };
    return Tienda;
}());
exports.Tienda = Tienda;
var tienda1 = new Tienda("center");
tienda1.totalVentaCd(venta1);
tienda1.totalVentaCd(venta2);
tienda1.totalVentaCd(venta3);
var ingresosCds = tienda1.calVentaCd();
console.log("los ingresos de la venta son ", ingresosCds, "Bs");
