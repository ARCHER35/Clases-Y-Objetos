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
var prueba2_1 = require("./prueba2");
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
    function Disco(nom, pre, cli) {
        this.name = nom;
        this.precio = pre;
        this.cliente = cli;
    }
    Disco.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Disco.prototype.getPrecio = function () {
        return this.precio;
    };
    return Disco;
}());
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(name, pre, cli) {
        return _super.call(this, name, pre, cli) || this;
    }
    return Cd;
}(Disco));
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(name, pre, cli) {
        return _super.call(this, name, pre, cli) || this;
    }
    return Dvd;
}(Disco));
var Blueray = /** @class */ (function (_super) {
    __extends(Blueray, _super);
    function Blueray(name, pre, cli) {
        return _super.call(this, name, pre, cli) || this;
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
        var monto = this.producto.getPrecio();
        return monto;
    };
    return Venta;
}());
exports.Venta = Venta;
var venta;
var venta1 = new Venta(cd1, cliente);
var venta2 = new Venta(blu3, cliente);
var venta3 = new Venta(blu2, cliente);
venta1.montoVenta();
venta2.montoVenta();
venta3.montoVenta();
var Tienda = /** @class */ (function () {
    function Tienda(nombret) {
        this.nombreT = nombret;
        this.venta = [];
    }
    Tienda.prototype.totalVentaCd = function (venta1) {
        this.venta.push(venta1);
    };
    Tienda.prototype.calVentaCd = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            suma += prod.precio;
            return suma;
        }
    };
    Tienda.prototype.calVentaDvd = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Dvd) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calcularVentaBluRay = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof prueba2_1.BluRay) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.totalVentas = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            suma += prod.precio;
        }
        return suma;
    };
    return Tienda;
}());
exports.Tienda = Tienda;
var tienda1 = new Tienda("center");
tienda1.totalVentaCd(venta1);
tienda1.totalVentaCd(venta2);
tienda1.totalVentaCd(venta3);
console.log(tienda1);
var ingresoscds = tienda1.calVentaCd();
var ingresosdvd = tienda1.calVentaDvd();
var ingresosbluray = tienda1.calcularVentaBluRay();
console.log("los ingresos de la venta son ", ingresoscds, "Bs");
console.log(ingresosdvd);
console.log(ingresosbluray);
