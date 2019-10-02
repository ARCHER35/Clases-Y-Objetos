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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(modelo, precio, ruedas) {
        this.modelo = modelo;
        this.precio = precio;
        this.ruedas = ruedas;
    }
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(modelo, precio, ruedas) {
        return _super.call(this, modelo, precio, ruedas) || this;
    }
    return Toyota;
}(Vehiculo));
var Nissan = /** @class */ (function (_super) {
    __extends(Nissan, _super);
    function Nissan(modelo, precio, ruedas) {
        return _super.call(this, modelo, precio, ruedas) || this;
    }
    return Nissan;
}(Vehiculo));
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(modelo, precio, ruedas) {
        return _super.call(this, modelo, precio, ruedas) || this;
    }
    return Bmw;
}(Vehiculo));
var Chevrolet = /** @class */ (function (_super) {
    __extends(Chevrolet, _super);
    function Chevrolet(modelo, precio, ruedas) {
        return _super.call(this, modelo, precio, ruedas) || this;
    }
    return Chevrolet;
}(Vehiculo));
var Volvo = /** @class */ (function (_super) {
    __extends(Volvo, _super);
    function Volvo(modelo, precio, ruedas) {
        return _super.call(this, modelo, precio, ruedas) || this;
    }
    return Volvo;
}(Vehiculo));
var Cliente = /** @class */ (function () {
    function Cliente(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var Venta = /** @class */ (function () {
    function Venta(producto, cliente) {
        this.producto = producto;
        this.cliente = cliente;
    }
    Venta.prototype.montoVenta = function () {
        var monto = this.producto.precio;
        console.log(monto);
        return monto;
    };
    return Venta;
}());
exports.Venta = Venta;
var cliente1 = new Cliente("Rodrigo", "Zenteno", "rodrizzzz@.com");
var cliente2 = new Cliente("Roger", "Snow", "rogerrrr23@.com");
var cliente3 = new Cliente("Alber", "Einstein", "ainstenxdxd@.com");
var cliente4 = new Cliente("Bob", "Claros", "bobiddd@gmail.com");
var cliente5 = new Cliente("Jose", "Claros", "josejose@.com");
var cliente6 = new Cliente("Ernesto", "Guevarra", "sin correo");
var auto1 = new Toyota("Carina", 3500, 4);
var auto2 = new Toyota("Marino", 4500, 5);
var auto3 = new Nissan("Juck", 5000, 5);
var auto4 = new Nissan("Cube", 6000, 4);
var auto5 = new Bmw("Sedan", 8000, 4);
var auto6 = new Bmw("Roadster", 9000, 5);
var auto7 = new Chevrolet("Spark", 12000, 4);
var auto8 = new Chevrolet("Orlando", 14000, 5);
var volvo1 = new Volvo("S90", 6500, 4);
var volvo2 = new Volvo("F5", 25000, 10);
var venta1 = new Venta(auto1, cliente1);
var venta2 = new Venta(auto2, cliente2);
var venta3 = new Venta(auto3, cliente3);
var venta4 = new Venta(auto4, cliente4);
var venta5 = new Venta(auto5, cliente5);
var venta6 = new Venta(auto7, cliente1);
var venta7 = new Venta(volvo1, cliente3);
var venta8 = new Venta(auto6, cliente4);
var venta9 = new Venta(auto8, cliente1);
var venta10 = new Venta(volvo2, cliente6);
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
var Tienda = /** @class */ (function () {
    function Tienda(nombre) {
        this.nombreTienda = nombre;
        this.venta = [];
    }
    Tienda.prototype.realizarVenta = function (venta) {
        this.venta.push(venta);
    };
    Tienda.prototype.calVentaToyota = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Toyota) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calVentaNissan = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Nissan) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calVentaBmw = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Bmw) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calVentaChevrolet = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Chevrolet) {
                suma += prod.precio;
            }
        }
        return suma;
    };
    Tienda.prototype.calVentaVolvo = function () {
        var suma = 0;
        for (var i = 0; i < this.venta.length; i++) {
            var prod = this.venta[i].producto;
            if (prod instanceof Volvo) {
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
var tiendavehiculos = new Tienda("Mall");
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
var ingToyota = tiendavehiculos.calVentaToyota();
console.log("El ingreso total en ventas de toyota es:", ingToyota);
var ingNissan = tiendavehiculos.calVentaNissan();
console.log("El ingreso total en ventas de Nissan es:", ingNissan);
var ingBmw = tiendavehiculos.calVentaBmw();
console.log("El ingreso total en ventas de Bmw es:", ingBmw);
var ingChevrolet = tiendavehiculos.calVentaChevrolet();
console.log("El ingreso total en ventas de Chevrolet es:", ingChevrolet);
var ingVolvo = tiendavehiculos.calVentaVolvo();
console.log("El ingrso total en ventas de Volvo es:", ingVolvo);
