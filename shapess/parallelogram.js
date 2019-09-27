"use strict";
exports.__esModule = true;
var Parallelogram = /** @class */ (function () {
    function Parallelogram(baseA, baseB, height1, height2) {
        this.baseA = baseA;
        this.baseB = baseB;
        this.height1 = height1;
        this.height2 = height2;
    }
    Parallelogram.prototype.setBaseA = function (baseA) {
        this.baseA = baseA;
    };
    Parallelogram.prototype.setBaseB = function (baseB) {
        this.baseB = baseB;
    };
    Parallelogram.prototype.setHeight1 = function (height1) {
        this.height1 = height1;
    };
    Parallelogram.prototype.setHeight2 = function (height2) {
        this.height2 = height2;
    };
    Parallelogram.prototype.getBaseA = function () {
        return this.baseA;
    };
    Parallelogram.prototype.getBaseB = function () {
        return this.baseB;
    };
    Parallelogram.prototype.getHeight1 = function () {
        return this.height1;
    };
    Parallelogram.prototype.getHeight2 = function () {
        return this.height2;
    };
    Parallelogram.prototype.getArea = function () {
        var area = this.baseA * this.height1;
        return area;
    };
    return Parallelogram;
}());
exports.Parallelogram = Parallelogram;
var parallelogram1 = new Parallelogram(3, 4, 5, 6);
console.log(parallelogram1);
parallelogram1.setBaseA(7);
parallelogram1.setBaseB(7);
parallelogram1.setHeight1(10);
parallelogram1.setHeight2(10);
console.log(parallelogram1);
var areaParallelogram1 = parallelogram1.getArea();
console.log(areaParallelogram1);
