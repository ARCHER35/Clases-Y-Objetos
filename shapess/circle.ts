export class Circle {
    private radio: number;
    private diametro: number;
    public constructor(radio: number, diametro:number){
        this.radio = radio;
        this.diametro = diametro;
    }
    public setDiametro(diametro: number):void {
        this.diametro=diametro;
    }
    public setRadio(radio: number):void{
        this.radio=radio;
    }
    public getDiametro(): number {
        return this.diametro;
    }
    public getRadio(): number {
        return this.radio;
    }
    public getArea(): number {
        let area:number =3.1416*(this.radio)**2;
        return area;
    }
}
let circle1:Circle = new Circle(5,10);
console.log(circle1);
circle1.setDiametro(20);
circle1.setRadio(10);
console.log(circle1);
let areaCircle1:number = circle1.getArea();
console.log(areaCircle1);
