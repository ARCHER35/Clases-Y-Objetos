"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.setBase = function (base) {
        this.base = base;
    };
    Triangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    Triangle.prototype.getArea = function () {
        var area = 1 / 2 * this.base * this.height;
        return area;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var triangle1 = new Triangle(10, 15);
console.log(triangle1);
triangle1.setBase(15);
triangle1.setHeight(25);
console.log(triangle1);
var areaTriangle1 = triangle1.getArea();
console.log(areaTriangle1);
