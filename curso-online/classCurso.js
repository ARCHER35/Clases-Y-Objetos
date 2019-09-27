"use strict";
exports.__esModule = true;
/**
 * crear 5 instancias de la clase curso
 * crear 10 instancias de la clase estudiante
 * crear 2 instancias de la clase docente con mass de 2 direcciones
 * crear 12 instancias de compracurso
 * hacer correr y verificar el corecto funcionamiento de las clases inplementadas
 * Subir al repositorios
 */
var Docente = /** @class */ (function () {
    function Docente(nomb, apell, correo, prof) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
    }
    return Docente;
}());
exports.Docente = Docente;
var docente = new Docente("Albert", "Einstein", "ainsteinxdxd35@gmail.com", "Profesor con Maestria");
var Curso = /** @class */ (function () {
    function Curso(nomb, desc, pre, doc, dur) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
    return Curso;
}());
exports.Curso = Curso;
var curso = new Curso("Matematicas", "Numeros", 200, [docente], "6 meses");
console.log(curso);
var Curso1 = /** @class */ (function () {
    function Curso1(nom, mat, pre, dur, doc) {
        this.nombre = nom;
        this.materia = mat;
        this.precio = pre;
        this.duracion = dur;
        this.docente = doc;
    }
    return Curso1;
}());
exports.Curso1 = Curso1;
var curso1 = new Curso1("Curso 1°de Especialidad", "Lenguaje", 850, "4 Años", [docente]);
console.log(curso1);
var Curso2 = /** @class */ (function () {
    function Curso2(nom, dur, mat, pre, doc) {
        this.nombre = nom;
        this.duracion = dur;
        this.materia = mat;
        this.precio = pre;
        this.docente = doc;
    }
    return Curso2;
}());
exports.Curso2 = Curso2;
var curso2 = new Curso2("Curso 2° de Especialidad", "3 Años", "Lenguaje", 750, [docente]);
console.log(curso2);
var Curso3 = /** @class */ (function () {
    function Curso3(nomb, mat, pre, doc, dur) {
        this.nombre = nomb;
        this.materia = mat;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
    return Curso3;
}());
exports.Curso3 = Curso3;
var curso3 = new Curso3("Curso 3° de Especialidad", "lenguaje", 650, [docente], "2 Años");
console.log(curso3);
var Curso4 = /** @class */ (function () {
    function Curso4(nomb, mat, pre, doc, dur) {
        this.nombre = nomb;
        this.materia = mat;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
    return Curso4;
}());
exports.Curso4 = Curso4;
var curso4 = new Curso4("Curso 4° de Especialidad", "lenguaje", 550, [docente], "1 Año");
console.log(curso4);
