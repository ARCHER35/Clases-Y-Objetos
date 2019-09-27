"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(base, height, sideA, sideB) {
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    Square.prototype.setBase = function (base) {
        this.base = base;
    };
    Square.prototype.setHeight = function (height) {
        this.height = height;
    };
    Square.prototype.setSideA = function (sideA) {
        this.sideA = sideA;
    };
    Square.prototype.setSideB = function (sideB) {
        this.sideB = sideB;
    };
    Square.prototype.getBase = function () {
        return this.base;
    };
    Square.prototype.getHeight = function () {
        return this.height;
    };
    Square.prototype.getSideA = function () {
        return this.sideA;
    };
    Square.prototype.getSideB = function () {
        return this.sideB;
    };
    Square.prototype.getArea = function () {
        var area = this.base * this.height * this.sideA * this.sideB;
        return area;
    };
    return Square;
}());
exports.Square = Square;
var square1 = new Square(10, 10, 10, 10);
console.log(square1);
square1.setBase(40);
square1.setHeight(40);
square1.setSideA(40);
square1.setSideB(40);
console.log(square1);
var areaSquare = square1.getArea();
console.log(areaSquare);
