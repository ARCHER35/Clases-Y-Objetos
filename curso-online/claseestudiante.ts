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
let direccion:Direccion = new Direccion("Cochabamba","Blanco Galindo","27 de mayo");

export class Direccion2 {
    private ciudad: string;
    private barrio: string;
    private clalle: string;
    public constructor(c:string, b:string, cal:string) {
        this.ciudad = c;
        this.barrio = b;
        this.clalle = cal;
    }
}
let direccion2:Direccion2 = new Direccion2("Nuevo Mexico","Republica","Pricipal");

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    private edad: number;
    public constructor(nomb:string, apell:string, correo:string,dir:Direccion[], edad:number) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
}
let estudiante:Estudiante = new Estudiante("Benjamin","Sosa","benjamin.zenteno@.com",[direccion],15);
let estudiante1:Estudiante = new Estudiante("Rodrigo","Zenteno","rodrigo.zenteno@.com",[direccion],17);
let estudiante2:Estudiante = new Estudiante("Jose","Antonio","jose.antonio@.com",[direccion],19);
let estudiante3:Estudiante = new Estudiante("Barrientos","Ortuño","barrientos.ortuño@.com",[direccion],18);
let estudiante4:Estudiante = new Estudiante("Ernesto","Antezana","ernetin@.com",[direccion],25);
let estudiante5:Estudiante = new Estudiante("Michel","Augustin","gusmitin@.com",[direccion],16);
let estudiante6:Estudiante = new Estudiante("Benji","Trock","troking.@.com",[direccion],22);
let estudiante7:Estudiante = new Estudiante("Barto","Lomeo","el_barto@.com",[direccion],12);
let estudiante8:Estudiante = new Estudiante("Daniel","Salamanca","daniel.@.com",[direccion],15);
let estudiante9:Estudiante = new Estudiante("Francisco","Einstein","frankiirr@.com",[direccion],25);
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

export class Curso {
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
let curso:Curso = new Curso("Curso de Especialidad","Matematicas",1000,"5 Años",[docente]);
let curso1:Curso = new Curso("Curso 1°de Especialidad","Lenguaje",850,"4 Años",[docente]);
let curso2:Curso = new Curso("Curso 2° de Especialidad","Artes Plasticas",750,"3 Años",[docente]);
let curso3:Curso = new Curso("Curso 3° de Especialidad","lenguaje",650,"2 Años",[docente]);
let curso4:Curso = new Curso("Curso 4° de Especialidad","Fisica",550,"1 Año",[docente]);
let curso5:Curso = new Curso("Curso 5° de Especialidad","Aritmetica",450,"2 Años",[docente]);
console.log(curso);
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);

export class Profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    private direccion2: Direccion2[];
    public constructor(nomb:string, apell:string, correo:string, prof:string, dir: Direccion[],direc:Direccion2[]) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
        this.direccion2 = direc;
    }
}
let profesor:Profesor = new Profesor("Eduardo","Avaroa","eduavarr@gmail.com","Profesor con Maestria",[direccion],[direccion2]);
let profesor1:Profesor = new Profesor("Napoleon","Bonaparte","napoxoxo@gmail.com","Profesor en Idiomas",[direccion],[direccion2]);
console.log(profesor);
console.log(profesor1);

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
let compra1:ComprarCurso = new ComprarCurso("21 de Febrero",[curso],[estudiante]);
let compra2:ComprarCurso = new ComprarCurso("28 de Febrero",[curso1],[estudiante1]);
let compra3:ComprarCurso = new ComprarCurso("15 de Febrero",[curso3],[estudiante3]);
let compra4:ComprarCurso = new ComprarCurso("2 de Marzo",[curso2],[estudiante2]);
let compra5:ComprarCurso = new ComprarCurso("1 de Febrero",[curso4],[estudiante4]);
let compra6:ComprarCurso = new ComprarCurso("1 de Marzo",[curso5],[estudiante5]);
console.log(compra1);
console.log(compra2);
console.log(compra3);
console.log(compra4);
console.log(compra5);
console.log(compra6);