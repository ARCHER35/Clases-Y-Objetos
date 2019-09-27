export class Parallelogram {
    private baseA: number;
    private baseB: number;
    private height1: number;
    private height2: number;
    public constructor(baseA:number, baseB:number, height1:number, height2:number) {
        this.baseA = baseA;
        this.baseB = baseB;
        this.height1 = height1;
        this.height2 = height2;
    }
    public setBaseA(baseA:number): void {
        this.baseA = baseA;
    }
    public setBaseB(baseB:number): void {
        this.baseB = baseB;
    }
    public setHeight1(height1: number): void {
        this.height1 = height1;
    }
    public setHeight2(height2: number): void {
        this.height2 = height2;
    }
    public getBaseA(): number {
        return this.baseA;
    }
    public getBaseB(): number {
        return this.baseB;
    }
    public getHeight1(): number {
        return this.height1;
    }
    public getHeight2(): number {
        return this.height2;
    }
    public getArea(): number {
        let area:number =this.baseA * this.height1;
        return area;
    }
}
let parallelogram1:Parallelogram = new Parallelogram(3,4,5,6);
console.log(parallelogram1);

parallelogram1.setBaseA(7);
parallelogram1.setBaseB(7);
parallelogram1.setHeight1(10);
parallelogram1.setHeight2(10);
console.log(parallelogram1);
let areaParallelogram1: number = parallelogram1.getArea();
console.log(areaParallelogram1);

