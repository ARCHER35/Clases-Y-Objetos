export class Trapezoid {
    private base: number;
    private height: number;
    private width: number;
    public constructor(base:number, height:number, width:number) {
        this.base =base;
        this.height = height;
        this.width = width;
    } 
    public setBase(base:number): void {
        this.base = base;
    }
    public setHeight(height:number): void {
        this.height = height;
    }
    public setWidth(width:number): void { 
        this.width = width;
    }
    public getBase(): number {
        return this.base;
    }
    public getHeight(): number {
        return this.height;
    }
    public getWidth(): number {
        return this.width;
    }
    public getArea(): number {
        let area:number = 1/2 *(this.base + this.width) *this.height;
        return area;
    }
}
let trapezoid1:Trapezoid = new Trapezoid(10,50,10);
console.log(trapezoid1);
trapezoid1.setHeight(15);
trapezoid1.setWidth(60);
trapezoid1.setBase(20);
console.log(trapezoid1);

let areaTrapezoid1:number = trapezoid1.getArea();
console.log(areaTrapezoid1);
