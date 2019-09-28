"use strict";
exports.__esModule = true;
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
var estudiante1 = new Estudiante("Rodrigo", "Zenteno", "rodrigo.zenteno@.com", [direccion], 17);
var estudiante2 = new Estudiante("Jose", "Antonio", "jose.antonio@.com", [direccion], 19);
var estudiante3 = new Estudiante("Barrientos", "Ortuño", "barrientos.ortuño@.com", [direccion], 18);
var estudiante4 = new Estudiante("Ernesto", "Antezana", "ernetin@.com", [direccion], 25);
var estudiante5 = new Estudiante("Michel", "Augustin", "gusmitin@.com", [direccion], 16);
var estudiante6 = new Estudiante("Benji", "Trock", "troking.@.com", [direccion], 22);
var estudiante7 = new Estudiante("Barto", "Lomeo", "el_barto@.com", [direccion], 12);
var estudiante8 = new Estudiante("Daniel", "Salamanca", "daniel.@.com", [direccion], 15);
var estudiante9 = new Estudiante("Francisco", "Einstein", "frankiirr@.com", [direccion], 25);
console.log(estudiante);
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log(estudiante4);
console.log(estudiante5);
console.log(estudiante6);
console.log(estudiante7);
console.log(estudiante8);
console.log(estudiante9);
var Curso = /** @class */ (function () {
    function Curso(nom, mat, pre, dur, doc) {
        this.nombre = nom;
        this.materia = mat;
        this.precio = pre;
        this.duracion = dur;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var curso = new Curso("Curso de Especialidad", "Matematicas", 1000, "5 Años", [docente]);
var curso1 = new Curso("Curso 1°de Especialidad", "Lenguaje", 850, "4 Años", [docente]);
var curso2 = new Curso("Curso 2° de Especialidad", "Artes Plasticas", 750, "3 Años", [docente]);
var curso3 = new Curso("Curso 3° de Especialidad", "lenguaje", 650, "2 Años", [docente]);
var curso4 = new Curso("Curso 4° de Especialidad", "Fisica", 550, "1 Año", [docente]);
var curso5 = new Curso("Curso 5° de Especialidad", "Aritmetica", 450, "2 Años", [docente]);
console.log(curso);
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);
var Profesor = /** @class */ (function () {
    function Profesor(nomb, apell, correo, prof, dir, direc) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
        this.direccion2 = direc;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
var profesor = new Profesor("Eduardo", "Avaroa", "eduavarr@gmail.com", "Profesor con Maestria", [direccion], [direccion2]);
var profesor1 = new Profesor("Napoleon", "Bonaparte", "napoxoxo@gmail.com", "Profesor en Idiomas", [direccion], [direccion2]);
console.log(profesor);
console.log(profesor1);
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
var compra2 = new ComprarCurso("28 de Febrero", [curso1], [estudiante1]);
var compra3 = new ComprarCurso("15 de Febrero", [curso3], [estudiante3]);
var compra4 = new ComprarCurso("2 de Marzo", [curso2], [estudiante2]);
var compra5 = new ComprarCurso("1 de Febrero", [curso4], [estudiante4]);
var compra6 = new ComprarCurso("1 de Marzo", [curso5], [estudiante5]);
console.log(compra1);
console.log(compra2);
console.log(compra3);
console.log(compra4);
console.log(compra5);
console.log(compra6);
