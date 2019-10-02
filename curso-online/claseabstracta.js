"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(base, height, length) {
        this.base = base;
        this.height = height;
        this.length = length;
    }
    FiguraGeometrica.prototype.setBase = function (base) {
        this.base = base;
    };
    FiguraGeometrica.prototype.getBase = function () {
        return this.base;
    };
    FiguraGeometrica.prototype.getArea = function () {
        var area = 1 / 2 * this.base * this.height;
        return area;
    };
    FiguraGeometrica.prototype.getVolRectangle = function () {
        var volumen = this.base * this.height * this.length;
        return volumen;
    };
    FiguraGeometrica.prototype.getVolTriangle = function () {
        var volumen = 1 / 3 * this.getArea() * this.height;
        return volumen;
    };
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height, length) {
        return _super.call(this, base, height, length) || this;
    }
    return Triangle;
}(FiguraGeometrica));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(base, height, length) {
        return _super.call(this, base, height, length) || this;
    }
    return Rectangle;
}(FiguraGeometrica));
var triangle1 = new Triangle(20, 20, 10);
console.log(triangle1);
var rectangle1 = new Rectangle(10, 25, 10);
console.log(rectangle1);
var areatriangle1 = triangle1.getArea();
var arearectangle1 = rectangle1.getArea();
var voltriangle = triangle1.getVolTriangle();
var volrectangle = rectangle1.getVolRectangle();
console.log("El Area del Triangle es: ", areatriangle1);
console.log("E Area del Triangle es: ", arearectangle1);
console.log("Su volumen del triangulo es: ", voltriangle);
console.log("El volumen del rectangulo es: ", volrectangle);
