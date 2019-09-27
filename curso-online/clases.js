"use strict";
exports.__esModule = true;
/**
 * se necesita resolver el siguiente problema usando programacion orientada a objetos.
 * se desea realizar un sistema de venta de curso online como por ejemplo Udemy, Platzi,etc
 * para ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar
 * su informacion basica como nobre,apellido,correo,direccion; por otra parte se necesita interactuar con los cursos
 * que se inpartiran de los mismos se necesita registrar su precio, nombre , descripsion;
 * finalmente se desea guardar el registro de los estudiantes que compraron algun curso, un estudiante o profesor
 * puede tener una o mas direcciones al mismo tiempo una direccion esta compuesta por la siguiente informacion:
 * ciudad,bario,calle
//** */
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion = new Direccion("Cochabamba", "Sud", "27 de mayo");
console.log(direccion);
var Estudiante = /** @class */ (function () {
    function Estudiante(nomb, apell, correo, dir) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var estudiante = new Estudiante("Benjamin", "Sosa", "benjamin.zenteno@.com", [direccion]);
console.log(estudiante);
var Docente = /** @class */ (function () {
    function Docente(nomb, apell, correo, prof, dir) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var docente = new Docente("Rodrigo", "Zenteno", "rodrigo.zenteno35@gmail.com", "Profesor", [direccion]);
console.log(docente);
var Curso = /** @class */ (function () {
    function Curso(nomb, desc, pre, doc) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var curso = new Curso("Matematicas", "Numeros", 200, [docente]);
console.log(curso);
var ComprarCurso = /** @class */ (function () {
    function ComprarCurso(fecha, curso, est) {
        this.fecha = fecha;
        this.curso = curso;
        this.estudiante = est;
    }
    return ComprarCurso;
}());
exports.ComprarCurso = ComprarCurso;
var compra1 = new ComprarCurso("17 de Enero", [curso], [estudiante]);
console.log(compra1);
