export abstract class FiguraGeometrica {
    constructor(private base:number, private height:number, private length:number) {
    }
    setBase(base): void {
        this.base = base;
    }
    getBase(): number {
        return this.base;
    }
    getArea(): number {
        let area:number = 1/2 * this.base * this.height;
        return area;
    }
    getVolRectangle(): number {
        let volumen:number = this.base*this.height*this.length;
        return volumen;
    }
    getVolTriangle(): number {
        let volumen:number = 1/3 *this.getArea()*this.height;
        return volumen;
    }
} 
class Triangle extends FiguraGeometrica {
    constructor(base:number, height:number,length:number) {
        super(base,height,length);
    }
}
class Rectangle extends FiguraGeometrica {
    constructor(base:number, height:number,length:number) {
        super(base,height,length);
    }
}
let triangle1:FiguraGeometrica = new Triangle(20,20,10);
console.log(triangle1);
let rectangle1:FiguraGeometrica = new Rectangle(10,25,10);
console.log(rectangle1);
let areatriangle1: number = triangle1.getArea();
let arearectangle1: number = rectangle1.getArea();
let voltriangle:number = triangle1.getVolTriangle();
let volrectangle:number = rectangle1.getVolRectangle();
console.log("El Area del Triangle es: ",areatriangle1);
console.log("E Area del Triangle es: ",arearectangle1);
console.log("Su volumen del triangulo es: ",voltriangle);
console.log("El volumen del rectangulo es: ",volrectangle);
