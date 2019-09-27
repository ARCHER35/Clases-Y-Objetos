export class Rectangle {
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;
    public constructor(px:number, py:number, h:number, w:number) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    public setPosX(px:number): void {
        this.posX = px;
    }
    public setPosY(py:number): void {
        this.posY = py;
    }
    public setHeight(h: number): void {
        this.height = h;
    }
    public setWidth(w: number): void {
        this.width = w;
    }
    public getPosX(): number {
        return this.posX;
    }
    public getPosY(): number {
        return this.posY;
    }
    public getHeight(): number {
        return this.height;
    }
    public getWidth(): number {
        return this.width;
    }
    public desplazar(posYnew:number, posXnew:number):void {
        this.posX = posXnew;
        this.posY = posYnew;
    }
    public getArea():number {
        let area:number = this.height * this.width;
        return area;
    }
    public getPerimeter():number{
        let perimeter:number = 2*this.height +2*this.width;
        return perimeter;
    }
}
let rectangle1:Rectangle = new Rectangle(4,4,5,6);
console.log(rectangle1);

rectangle1.setPosX(7);
rectangle1.setPosY(7);
rectangle1.setHeight(10);
rectangle1.setWidth(10);
console.log(rectangle1);
rectangle1.desplazar(25,25);
console.log(rectangle1);

let areaRectangle1:number = rectangle1.getArea();
console.log(areaRectangle1);

let perimeterRectangle1:number = rectangle1.getPerimeter();
console.log(perimeterRectangle1);