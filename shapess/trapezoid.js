"use strict";
exports.__esModule = true;
var Trapezoid = /** @class */ (function () {
    function Trapezoid(base, height, width) {
        this.base = base;
        this.height = height;
        this.width = width;
    }
    Trapezoid.prototype.setBase = function (base) {
        this.base = base;
    };
    Trapezoid.prototype.setHeight = function (height) {
        this.height = height;
    };
    Trapezoid.prototype.setWidth = function (width) {
        this.width = width;
    };
    Trapezoid.prototype.getBase = function () {
        return this.base;
    };
    Trapezoid.prototype.getHeight = function () {
        return this.height;
    };
    Trapezoid.prototype.getWidth = function () {
        return this.width;
    };
    Trapezoid.prototype.getArea = function () {
        var area = 1 / 2 * (this.base + this.width) * this.height;
        return area;
    };
    return Trapezoid;
}());
exports.Trapezoid = Trapezoid;
var trapezoid1 = new Trapezoid(10, 50, 10);
console.log(trapezoid1);
trapezoid1.setHeight(15);
trapezoid1.setWidth(60);
trapezoid1.setBase(20);
console.log(trapezoid1);
var areaTrapezoid1 = trapezoid1.getArea();
console.log(areaTrapezoid1);
