export class Square {
    private base : number;
    private height: number;
    private sideA: number;
    private sideB: number;
    public constructor(base: number, height:number, sideA:number, sideB:number) {
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    public setBase(base: number): void {
        this.base = base;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    public setSideA(sideA: number): void {
        this.sideA = sideA;
    }
    public setSideB(sideB: number): void {
        this.sideB = sideB;
    }
    public getBase(): number {
        return this.base;
    }
    public getHeight(): number {
        return this.height;
    }
    public getSideA(): number {
        return this.sideA;
    }
    public getSideB(): number {
        return this.sideB;
    }
    public getArea(): number {
        let area: number = this.base * this.height * this.sideA * this.sideB;
        return area;
    }
}
let square1:Square = new Square(10,10,10,10);
console.log(square1);
square1.setBase(40);
square1.setHeight(40);
square1.setSideA(40);
square1.setSideB(40);
console.log(square1);

let areaSquare:number = square1.getArea();
console.log(areaSquare);
