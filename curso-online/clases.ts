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
let direccion:Direccion = new Direccion("Cochabamba","Sud","27 de mayo");
console.log(direccion);

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    public constructor(nomb:string, apell:string, correo:string,dir:Direccion[]) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
    }
}
let estudiante:Estudiante = new Estudiante("Benjamin","Sosa","benjamin.zenteno@.com",[direccion]);
console.log(estudiante);


export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    public constructor(nomb:string, apell:string, correo:string, prof:string, dir: Direccion[]) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
    }
}
let docente:Docente = new Docente("Rodrigo","Zenteno","rodrigo.zenteno35@gmail.com","Profesor",[direccion]);
console.log(docente);


export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente[]; 
    public constructor(nomb:string, desc:string, pre:number, doc:Docente[]) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
        this.docente = doc;
    }
}
let curso:Curso = new Curso("Matematicas","Numeros",200,[docente]);
console.log(curso);
export class ComprarCurso {
    private fecha: string;
    private curso: Curso[];
    private estudiante: Estudiante[];
    public constructor(fecha:string, curso:Curso[], est:Estudiante[] ) {
        this.fecha = fecha;
        this.curso = curso;
        this.estudiante = est;
    }
}
let compra1:ComprarCurso = new ComprarCurso("17 de Enero",[curso],[estudiante]);
console.log(compra1);