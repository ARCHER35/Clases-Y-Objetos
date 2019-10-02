"use strict";
exports.__esModule = true;
/**
 * agregar un metodo a la clase  docente y estudiante que le permita agregar una direccion, la nueva direccion debe
 * agregarse como un elemento mas sobre las direcciones que ya existen.
 */
var Direccion = /** @class */ (function () {
    function Direccion(c, b, cal) {
        this.ciudad = c;
        this.barrio = b;
        this.calle = cal;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion = new Direccion("Cochabamba", "Oeste", "25 de Octubre");
var Direccion2 = /** @class */ (function () {
    function Direccion2(c, b, cal) {
        this.ciudad = c;
        this.barrio = b;
        this.calle = cal;
    }
    return Direccion2;
}());
exports.Direccion2 = Direccion2;
var direccion2 = new Direccion2("Santa Cruz", "2° Anillo", "30 de Octubre");
var Profesor = /** @class */ (function () {
    function Profesor(nom, apel, cor, pro, dir) {
        this.nombre = nom;
        this.apellido = apel;
        this.correo = cor;
        this.profesion = pro;
        this.direccion = dir;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
var profesor1 = new Profesor("Albert", "Einstein", "ainsteinxdxd@.com", "Profesor de Matematicas", [direccion]);
console.log(profesor1);
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, apel, cor, prof, dir) {
        this.nombre = nom;
        this.apellido = apel;
        this.correo = cor;
        this.profesor = prof;
        this.direccion = dir;
    }
    Estudiante.prototype.setdireccion = function (newDireccion2) {
        this.direccion = newDireccion2;
    };
    Estudiante.prototype.getdireccion = function () {
        return direccion2.direccion;
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var estudiante1 = new Estudiante("Rodrigo", "Zenteno", "rodrigo35@.com", [profesor1], [direccion]);
console.log(estudiante1);
estudiante1.setdireccion(direccion2);
console.log(estudiante1);
