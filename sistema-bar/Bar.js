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
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, color, cant) {
        this.nombre = nom;
        this.color = color;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Barto", 60);
console.log(bar1);
console.log(bar2);
var BarMan1 = new BarMan("Rodrigo", "Zenteno");
console.log(BarMan1);
var trago1 = new Trago("Whisky", "Cafe", 120);
console.log(trago1);
