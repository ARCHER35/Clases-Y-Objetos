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
var Curso = /** @class */ (function () {
    function Curso(nomb, desc, pre) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
    }
    return Curso;
}());
exports.Curso = Curso;
var curso1 = new Curso("Matematicas", "Numeros", 200);
console.log(curso1);
var Estudiante = /** @class */ (function () {
    function Estudiante(nomb, apell, correo) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var estudiante1 = new Estudiante("Rodrigo", "Zenteno", "rodrigo.zenteno@.com");
console.log(estudiante1);
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
var docente1 = new Docente("Rodrigo", "Zenteno", "rodrigo.zenteno@.com", "Profesor");
console.log(docente1);
var ComprarCurso = /** @class */ (function () {
    function ComprarCurso(fecha) {
        this.fecha = fecha;
    }
    return ComprarCurso;
}());
exports.ComprarCurso = ComprarCurso;
var compra1 = new ComprarCurso("17 de Enero");
console.log(compra1);
var Direccion = /** @class */ (function () {
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion1 = new Direccion("Cochabamba", "Sud", "27 de mayo");
console.log(direccion1);
