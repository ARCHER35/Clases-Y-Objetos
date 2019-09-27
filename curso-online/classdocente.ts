/**
 * crear 2 instancias de la clase docente con mass de 2 direcciones
 */
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
let direccion:Direccion = new Direccion("Nuevo Mexico","Ortencia","27 de mayo");

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

export class Docente {
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
let docente:Docente = new Docente("Rodrigo","Zenteno","rodrigo.zenteno35@gmail.com","Profesor",[direccion],[direccion2]);
console.log(docente);

export class DocenteInicial {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    private direccion2: Direccion2[];
    public constructor(nomb:string, apell:string, correo:string, prof:string, dir: Direccion[],dire:Direccion2[]) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.profesion = prof;
        this.direccion = dir;
        this.direccion2 = dire;
    }
}
let docenteInicial:DocenteInicial = new DocenteInicial("Albert","Einstein","ainsteinxoxo35@gmail.com","Profesor en Idiomas",[direccion],[direccion2]);
console.log(docenteInicial);
