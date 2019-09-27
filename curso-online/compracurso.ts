export class Curso {
    private nombre: string;
    private materia: string;
    private precio: number;
    public constructor(nomb:string, mat:string, pre:number) {
        this.nombre = nomb;
        this.materia = mat;
        this.precio = pre;
    }
}
let curso:Curso = new Curso("Curso Avanzado","Matematicas",200);

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
let estudiante:Estudiante = new Estudiante("Armando","Escobar","armanditoeee@.com");

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
console.log(compra1);