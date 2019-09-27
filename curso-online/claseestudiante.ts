//crear 10 instancias de la clase estudiante
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
console.log(estudiante);

export class Estudiante1 {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    private edad:number;
    public constructor(nomb:string, apell:string, correo:string,dir:Direccion[], edad: number) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
}
let estudiante1:Estudiante1 = new Estudiante1("Rodrigo","Zenteno","rodrigo.zenteno@.com",[direccion],17);
console.log(estudiante1);

export class Estudiante2 {
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
let estudiante2:Estudiante2 = new Estudiante2("Jose","Antonio","jose.antonio@.com",[direccion]);
console.log(estudiante2);

export class Estudiante3 {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    private edad: number;
    public constructor(nomb:string, apell:string, correo:string, dir:Direccion[], edad:number) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
}
let estudiante3:Estudiante3 = new Estudiante3("Barrientos","Ortuño","barrientos.ortuño@.com",[direccion],18);
console.log(estudiante3);

export class Estudiante4 {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    private edad: number;
    public constructor(nomb:string, apell:string, correo:string, dir:Direccion[], edad:number) {
        this.nombre = nomb;
        this.apellido = apell;
        this.correo = correo;
        this.direccion = dir;
        this.edad = edad;
    }
}
let estudiante4:Estudiante4 = new Estudiante4("Ernesto","Antezana","ernetin@.com",[direccion],25);
console.log(estudiante4);

export class Estudiante5 {
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
let estudiante5:Estudiante5 = new Estudiante5("Michel","Augustin","gusmitin@.com",[direccion],16);
console.log(estudiante5);

export class Estudiante6 {
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
let estudiante6:Estudiante6 = new Estudiante6("Benji","Trock","troking.@.com",[direccion],22);
console.log(estudiante6);

export class Estudiante7 {
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
let estudiante7 = new Estudiante7("Barto","Lomeo","el_barto@.com",[direccion],12);
console.log(estudiante7);

export class Universitario1 {
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
let universitario:Universitario1 = new Universitario1("Daniel","Salamanca","daniel.@.com",[direccion],15);
console.log(universitario);

export class Universitario2 {
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
let universitario2:Universitario2 = new Universitario2("Albert","Einstein","ainstainrr@.com",[direccion],25);
console.log(estudiante);