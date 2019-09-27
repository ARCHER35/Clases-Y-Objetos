"use strict";
exports.__esModule = true;
//crear 10 instancias de la clase estudiante
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion = new Direccion("Cochabamba", "Blanco Galindo", "27 de mayo");
var Estudiante = /** @class */ (function () {
    function Estudiante(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var estudiante = new Estudiante("Benjamin", "Sosa", "benjamin.zenteno@.com", [direccion], 15);
console.log(estudiante);
var Estudiante1 = /** @class */ (function () {
    function Estudiante1(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante1;
}());
exports.Estudiante1 = Estudiante1;
var estudiante1 = new Estudiante1("Rodrigo", "Zenteno", "rodrigo.zenteno@.com", [direccion], 17);
console.log(estudiante1);
var Estudiante2 = /** @class */ (function () {
    function Estudiante2(nomb, apell, correo, dir) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
    }
    return Estudiante2;
}());
exports.Estudiante2 = Estudiante2;
var estudiante2 = new Estudiante2("Jose", "Antonio", "jose.antonio@.com", [direccion]);
console.log(estudiante2);
var Estudiante3 = /** @class */ (function () {
    function Estudiante3(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante3;
}());
exports.Estudiante3 = Estudiante3;
var estudiante3 = new Estudiante3("Barrientos", "Ortuño", "barrientos.ortuño@.com", [direccion], 18);
console.log(estudiante3);
var Estudiante4 = /** @class */ (function () {
    function Estudiante4(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante4;
}());
exports.Estudiante4 = Estudiante4;
var estudiante4 = new Estudiante4("Ernesto", "Antezana", "ernetin@.com", [direccion], 25);
console.log(estudiante4);
var Estudiante5 = /** @class */ (function () {
    function Estudiante5(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante5;
}());
exports.Estudiante5 = Estudiante5;
var estudiante5 = new Estudiante5("Michel", "Augustin", "gusmitin@.com", [direccion], 16);
console.log(estudiante5);
var Estudiante6 = /** @class */ (function () {
    function Estudiante6(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante6;
}());
exports.Estudiante6 = Estudiante6;
var estudiante6 = new Estudiante6("Benji", "Trock", "troking.@.com", [direccion], 22);
console.log(estudiante6);
var Estudiante7 = /** @class */ (function () {
    function Estudiante7(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Estudiante7;
}());
exports.Estudiante7 = Estudiante7;
var estudiante7 = new Estudiante7("Barto", "Lomeo", "el_barto@.com", [direccion], 12);
console.log(estudiante7);
var Universitario1 = /** @class */ (function () {
    function Universitario1(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Universitario1;
}());
exports.Universitario1 = Universitario1;
var universitario = new Universitario1("Daniel", "Salamanca", "daniel.@.com", [direccion], 15);
console.log(universitario);
var Universitario2 = /** @class */ (function () {
    function Universitario2(nomb, apell, correo, dir, edad) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
    return Universitario2;
}());
exports.Universitario2 = Universitario2;
var universitario2 = new Universitario2("Albert", "Einstein", "ainstainrr@.com", [direccion], 25);
console.log(estudiante);
