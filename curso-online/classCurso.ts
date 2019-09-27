/**
 * crear 5 instancias de la clase curso
 * crear 10 instancias de la clase estudiante
 * crear 2 instancias de la clase docente con mass de 2 direcciones 
 * crear 12 instancias de compracurso 
 * hacer correr y verificar el corecto funcionamiento de las clases inplementadas
 * Subir al repositorios
 */
export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    public constructor(nomb:string, apell:string, correo:string, prof:string) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
    }
}
let docente:Docente = new Docente("Albert","Einstein","ainsteinxdxd35@gmail.com","Profesor con Maestria",);

export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente[];
    private duracion: string; 
    public constructor(nomb:string, desc:string, pre:number, doc:Docente[], dur:string) {
        this.nombre = nomb;
        this.descripcion = desc;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
}
let curso:Curso = new Curso("Matematicas","Numeros",200,[docente],"6 meses");
console.log(curso);

export class Curso1 {
    private nombre: string;
    private materia: string
    private precio: number;
    private duracion: string;
    private docente: Docente[];
    public constructor(nom:string, mat:string, pre:number, dur:string, doc:Docente[]) {
        this.nombre = nom;
        this.materia = mat;
        this.precio = pre;
        this.duracion = dur;
        this.docente = doc;
    }
}
let curso1:Curso1 = new Curso1("Curso 1°de Especialidad","Lenguaje",850,"4 Años",[docente]);
console.log(curso1);

export class Curso2 {
    private nombre: string;
    private duracion: string;
    private materia: string;
    private precio: number;
    private docente: Docente[];
    public constructor(nom:string, dur:string, mat:string, pre:number, doc:Docente[]) {
        this.nombre = nom;
        this.duracion = dur;
        this.materia = mat;
        this.precio = pre;
        this.docente = doc;
    }
}
let curso2:Curso2 = new Curso2("Curso 2° de Especialidad","3 Años","Lenguaje",750,[docente]);
console.log(curso2);

export class Curso3 {
    private nombre: string;
    private materia: string;
    private precio: number;
    private docente: Docente[];
    private duracion: string; 
    public constructor(nomb:string, mat:string, pre:number, doc:Docente[], dur:string) {
        this.nombre = nomb;
        this.materia= mat;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
}
let curso3:Curso3 = new Curso3("Curso 3° de Especialidad","lenguaje",650,[docente],"2 Años");
console.log(curso3);

export class Curso4 {
    private nombre: string;
    private materia: string;
    private precio: number;
    private docente: Docente[]; 
    private duracion: string;
    public constructor(nomb:string, mat:string, pre:number, doc:Docente[], dur:string) {
        this.nombre = nomb;
        this.materia= mat;
        this.precio = pre;
        this.docente = doc;
        this.duracion = dur;
    }
}
let curso4:Curso4 = new Curso4("Curso 4° de Especialidad","lenguaje",550,[docente],"1 Año");
console.log(curso4);
