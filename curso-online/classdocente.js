"use strict";
exports.__esModule = true;
/**
 * crear 2 instancias de la clase docente con mass de 2 direcciones
 */
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion = new Direccion("Nuevo Mexico", "Ortencia", "27 de mayo");
var Direccion2 = /** @class */ (function () {
    function Direccion2(c, b, cal) {
        this.ciudad = c;
        this.barrio = b;
        this.clalle = cal;
    }
    return Direccion2;
}());
exports.Direccion2 = Direccion2;
var direccion2 = new Direccion2("Nuevo Mexico", "Republica", "Pricipal");
var Docente = /** @class */ (function () {
    function Docente(nomb, apell, correo, prof, dir, direc) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
        this.direccion2 = direc;
    }
    return Docente;
}());
exports.Docente = Docente;
var docente = new Docente("Rodrigo", "Zenteno", "rodrigo.zenteno35@gmail.com", "Profesor", [direccion], [direccion2]);
console.log(docente);
var DocenteInicial = /** @class */ (function () {
    function DocenteInicial(nomb, apell, correo, prof, dir, dire) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
        this.direccion2 = dire;
    }
    return DocenteInicial;
}());
exports.DocenteInicial = DocenteInicial;
var docenteInicial = new DocenteInicial("Albert", "Einstein", "ainsteinxoxo35@gmail.com", "Profesor en Idiomas", [direccion], [direccion2]);
console.log(docenteInicial);
