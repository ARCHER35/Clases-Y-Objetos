"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(radio, diametro) {
        this.radio = radio;
        this.diametro = diametro;
    }
    Circle.prototype.setDiametro = function (diametro) {
        this.diametro = diametro;
    };
    Circle.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circle.prototype.getDiametro = function () {
        return this.diametro;
    };
    Circle.prototype.getRadio = function () {
        return this.radio;
    };
    Circle.prototype.getArea = function () {
        var area = 3.1416 * Math.pow((this.radio), 2);
        return area;
    };
    return Circle;
}());
exports.Circle = Circle;
var circle1 = new Circle(5, 10);
console.log(circle1);
circle1.setDiametro(20);
circle1.setRadio(10);
console.log(circle1);
var areaCircle1 = circle1.getArea();
console.log(areaCircle1);
