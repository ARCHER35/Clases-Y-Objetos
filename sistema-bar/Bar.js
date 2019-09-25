"use strict";
exports.__esModule = true;
/**
 * Concepto: los atributos son las carecteristicas individuales que diferencia un objetode otro
 * y determinan su apariencia,estado u otras cualidades. los atributos se guardan en variables
 * denominadasde instancia, y cadaobjeto particular puede tener valores distintos para esta variable
 */
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.setApellido = function (apell) {
        this.apellido = apell;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, color, cant) {
        this.nombre = nom;
        this.color = color;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.setColor = function (color) {
        this.color = color;
    };
    Trago.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Barto", 60);
console.log(bar1);
console.log(bar2);
var BarMan1 = new BarMan("Rodrigo", "Zenteno");
console.log(BarMan1);
var trago1 = new Trago("Channdeler", "Cafe", 120);
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
