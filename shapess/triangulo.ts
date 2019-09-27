export class Triangle {
    private base : number;
    private height: number;
    public constructor(base:number, height:number){
        this.base = base;
        this.height = height;
    }
    public setBase(base:number): void {
     this.base = base;   
    }
    public setHeight(height:number): void {
        this.height = height;
    }
    public getBase(): number {
        return this.base;
    }
    public getHeight(): number {
        return this.height;
    }
    public getArea(): number {
        let area:number = 1/2 *this.base * this.height;
        return area;
    }
}
let triangle1:Triangle = new Triangle(10,15);
console.log(triangle1);
triangle1.setBase(15);
triangle1.setHeight(25);
console.log(triangle1);

let areaTriangle1: number = triangle1.getArea();
console.log(areaTriangle1);
