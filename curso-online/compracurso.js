"use strict";
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(nomb, mat, pre) {
        this.nombre = nomb;
        this.materia = mat;
        this.precio = pre;
    }
    return Curso;
}());
exports.Curso = Curso;
var curso = new Curso("Curso Avanzado", "Matematicas", 200);
var Estudiante = /** @class */ (function () {
    function Estudiante(nomb, apell, correo) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var estudiante = new Estudiante("Armando", "Escobar", "armanditoeee@.com");
var ComprarCurso = /** @class */ (function () {
    function ComprarCurso(fecha, curso, est) {
        this.fecha = fecha;
        this.curso = curso;
        this.estudiante = est;
    }
    return ComprarCurso;
}());
exports.ComprarCurso = ComprarCurso;
var compra1 = new ComprarCurso("21 de Febrero", [curso], [estudiante]);
console.log(compra1);
