"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangle.prototype.setHeight = function (h) {
        this.height = h;
    };
    Rectangle.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangle.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.desplazar = function (posYnew, posXnew) {
        this.posX = posXnew;
        this.posY = posYnew;
    };
    Rectangle.prototype.getArea = function () {
        var area = this.height * this.width;
        return area;
    };
    Rectangle.prototype.getPerimeter = function () {
        var perimeter = 2 * this.height + 2 * this.width;
        return perimeter;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var rectangle1 = new Rectangle(4, 4, 5, 6);
console.log(rectangle1);
rectangle1.setPosX(7);
rectangle1.setPosY(7);
rectangle1.setHeight(10);
rectangle1.setWidth(10);
console.log(rectangle1);
rectangle1.desplazar(25, 25);
console.log(rectangle1);
var areaRectangle1 = rectangle1.getArea();
console.log(areaRectangle1);
var perimeterRectangle1 = rectangle1.getPerimeter();
console.log(perimeterRectangle1);
