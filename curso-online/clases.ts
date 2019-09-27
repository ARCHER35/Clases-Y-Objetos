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
export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    public constructor(nomb:string, desc:string, pre:number) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
    }
}
let curso1:Curso = new Curso("Matematicas","Numeros",200);
console.log(curso1);

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    public constructor(nomb:string, apell:string, correo:string) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
    }
}
let estudiante1:Estudiante = new Estudiante("Rodrigo","Zenteno","rodrigo.zenteno@.com");
console.log(estudiante1);

export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string
    public constructor(nomb:string, apell:string, correo:string, prof:string) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
    }
}
let docente1:Docente = new Docente("Rodrigo","Zenteno","rodrigo.zenteno@.com","Profesor");
console.log(docente1);

export class ComprarCurso {
    private fecha: string;
    public constructor(fecha:string,) {
        this.fecha = fecha;
    }
}
let compra1:ComprarCurso = new ComprarCurso("17 de Enero");
console.log(compra1);

export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    public constructor(ciudad:string, barrio:string, calle:string) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
}
let direccion1:Direccion = new Direccion("Cochabamba","Sud","27 de mayo");
console.log(direccion1);