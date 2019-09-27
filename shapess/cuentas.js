"use strict";
exports.__esModule = true;
//let cuentabcp:cuenta =new cuentabcp(0,[]);
//cuentabcp ingreso(22)
//cuentabcp tranferencia
//cuentabcp reintegro
var Cuenta = /** @class */ (function () {
    function Cuenta(ing, trans, reint) {
        this.ingreso = ing;
        this.transferencia = trans;
        this.reintegro = reint;
    }
    Cuenta.prototype.setIngreso = function (ing) {
        this.ingreso = ing;
    };
    Cuenta.prototype.setTransferencia = function (trans) {
        this.ingreso = trans;
    };
    Cuenta.prototype.setReintegro = function (reint) {
        this.reintegro = reint;
    };
    Cuenta.prototype.getIngreso = function () {
        return this.ingreso;
    };
    Cuenta.prototype.getTransferencia = function () {
        return this.transferencia;
    };
    Cuenta.prototype.getReintegro = function () {
        return this.ingreso;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
var cuentabcp = new Cuenta(0, 0, 0);
console.log(cuentabcp);
cuentabcp.setIngreso(200);
console.log(cuentabcp);
cuentabcp.setIngreso(200);
console.log(cuentabcp);
