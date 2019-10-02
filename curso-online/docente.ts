/**
 * agregar un metodo a la clase  docente y estudiante que le permita agregar una direccion, la nueva direccion debe 
 * agregarse como un elemento mas sobre las direcciones que ya existen.
 */
export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    public constructor(c:string, b:string, cal:string){
        this.ciudad = c;
        this.barrio = b;
        this.calle = cal;
    }
}
let direccion:Direccion = new Direccion("Cochabamba","Oeste","25 de Octubre");

export class Direccion2 {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    direccion: string;
    public constructor(c:string, b:string, cal:string){
        this.ciudad = c;
        this.barrio = b;
        this.calle = cal;
    }
}
let direccion2:Direccion2 = new Direccion2("Santa Cruz","2° Anillo","30 de Octubre");

export class Profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    public constructor(nom:string, apel:string, cor:string, pro:string, dir:Direccion[]) {
        this.nombre = nom;
        this.apellido =apel;
        this.correo = cor;
        this.profesion = pro;
        this.direccion = dir;
    }
}
let profesor1:Profesor = new Profesor("Albert","Einstein","ainsteinxdxd@.com","Profesor de Matematicas",[direccion])
console.log(profesor1);

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesor: Profesor[];
    private direccion: Direccion[];
    public constructor(nom:string, apel:string, cor:string, prof:Profesor[], dir:Direccion[]) {
        this.nombre = nom;
        this.apellido = apel;
        this.correo = cor;
        this.profesor = prof;
        this.direccion = dir;
    }
    public setdireccion(newDireccion2): void {
        this.direccion = newDireccion2;
    }
    public getdireccion():string {
        return direccion2.direccion;
    }
}
let estudiante1:Estudiante = new Estudiante("Rodrigo","Zenteno","rodrigo35@.com",[profesor1],[direccion]);
console.log(estudiante1);
estudiante1.setdireccion(direccion2);
console.log(estudiante1);
