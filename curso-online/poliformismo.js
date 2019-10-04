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
/**
 * elaborar 2 ejemplos usando clases de herencia
 * elaborar 2 ejemplos usando clases abstracta
 * elaborar 3 ejemplos aplicando poliformismo
 */
var Pelota = /** @class */ (function () {
    function Pelota(nombre, tamaño, color) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.color = color;
    }
    return Pelota;
}());
exports.Pelota = Pelota;
var PelotaTenis = /** @class */ (function (_super) {
    __extends(PelotaTenis, _super);
    function PelotaTenis(nombre, tamaño, color) {
        return _super.call(this, nombre, tamaño, color) || this;
    }
    return PelotaTenis;
}(Pelota));
exports.PelotaTenis = PelotaTenis;
var pelotaGolf = /** @class */ (function (_super) {
    __extends(pelotaGolf, _super);
    function pelotaGolf(nombre, tamaño, color) {
        return _super.call(this, nombre, tamaño, color) || this;
    }
    return pelotaGolf;
}(Pelota));
exports.pelotaGolf = pelotaGolf;
var PelotaBasketball = /** @class */ (function (_super) {
    __extends(PelotaBasketball, _super);
    function PelotaBasketball(nombre, tamaño, color) {
        return _super.call(this, nombre, tamaño, color) || this;
    }
    return PelotaBasketball;
}(Pelota));
exports.PelotaBasketball = PelotaBasketball;
var PelotaFutbol = /** @class */ (function (_super) {
    __extends(PelotaFutbol, _super);
    function PelotaFutbol(nombre, tamaño, color) {
        return _super.call(this, nombre, tamaño, color) || this;
    }
    return PelotaFutbol;
}(Pelota));
exports.PelotaFutbol = PelotaFutbol;
var pelota1 = new PelotaTenis("Pelota de Tenis", "68 Milimetros", "Amarillo con franja Blasca");
var pelota2 = new pelotaGolf("Pelota de Golf", "42 Milimetros", "Blanco");
var pelota3 = new PelotaBasketball("PelotaBasketball", "78 Centimetros", "Naranja con franja Negra");
var pelota4 = new PelotaFutbol("Pelota de Futbol", "70 Centimetros", "Blanco con Puntos Negros");
console.log(pelota1);
console.log(pelota2);
console.log(pelota3);
console.log(pelota4);
var Celulares = /** @class */ (function () {
    function Celulares(marca, modelo, tamaño) {
        this.marca = marca;
        this.modelo = modelo;
        this.tamaño = tamaño;
    }
    return Celulares;
}());
exports.Celulares = Celulares;
var Sansum = /** @class */ (function (_super) {
    __extends(Sansum, _super);
    function Sansum(marca, modelo, tamaño) {
        return _super.call(this, marca, modelo, tamaño) || this;
    }
    Sansum.prototype.getPrecio = function () {
        var precio = 1500;
        return precio;
    };
    return Sansum;
}(Celulares));
exports.Sansum = Sansum;
var Motorola = /** @class */ (function (_super) {
    __extends(Motorola, _super);
    function Motorola(marca, modelo, tamaño) {
        return _super.call(this, marca, modelo, tamaño) || this;
    }
    Motorola.prototype.getPrecio = function () {
        var precio = 1200;
        return precio;
    };
    return Motorola;
}(Celulares));
exports.Motorola = Motorola;
var LG = /** @class */ (function (_super) {
    __extends(LG, _super);
    function LG(marca, modelo, tamaño) {
        return _super.call(this, marca, modelo, tamaño) || this;
    }
    LG.prototype.getPrecio = function () {
        var precio = 1400;
        return precio;
    };
    return LG;
}(Celulares));
exports.LG = LG;
var Nokia = /** @class */ (function (_super) {
    __extends(Nokia, _super);
    function Nokia(marca, modelo, tamaño) {
        return _super.call(this, marca, modelo, tamaño) || this;
    }
    Nokia.prototype.getPrecio = function () {
        var precio = 1850;
        return precio;
    };
    return Nokia;
}(Celulares));
exports.Nokia = Nokia;
var cell1 = new Sansum("Samsum", "S4", "5 Pulgadas");
var cell2 = new Motorola("Motorola", "Moto Z4", "4 Pulgadas");
var cell3 = new LG("LG", "K50S", "6 Pulgadas");
var cell4 = new Nokia("NokiaX", "110(2019)", "5.5 Pulgadas");
var precio1 = cell1.getPrecio();
var precio2 = cell2.getPrecio();
var precio3 = cell3.getPrecio();
var precio4 = cell4.getPrecio();
console.log("El Precio de Celular Samsun es:", precio1);
console.log("El Precio de Celular Motorola es:", precio2);
console.log("El Precio de Celular LG es:", precio3);
console.log("El Precio de Celular Nokia es:", precio4);
var Electrodomesticos = /** @class */ (function () {
    function Electrodomesticos(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    return Electrodomesticos;
}());
exports.Electrodomesticos = Electrodomesticos;
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Televisor.prototype.navegar = function () {
        return "El telivesor tiene Smart tiene acceso a la Navegacion";
    };
    Televisor.prototype.inf = function () {
        return "El televisor recibe informacion";
    };
    return Televisor;
}(Electrodomesticos));
exports.Televisor = Televisor;
var Computadora = /** @class */ (function (_super) {
    __extends(Computadora, _super);
    function Computadora(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Computadora.prototype.navegar = function () {
        return "La Computadora tiene distintas entradas al Navegador";
    };
    Computadora.prototype.inf = function () {
        return "La computadora recibe y da informacion";
    };
    return Computadora;
}(Electrodomesticos));
exports.Computadora = Computadora;
var Refrigerador = /** @class */ (function (_super) {
    __extends(Refrigerador, _super);
    function Refrigerador(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Refrigerador.prototype.atempera = function () {
        return "El refrigerador tiene la funcion de enfriar y conservar los producctos";
    };
    Refrigerador.prototype.inf = function () {
        return "El refrigerador recibe informacion";
    };
    return Refrigerador;
}(Electrodomesticos));
exports.Refrigerador = Refrigerador;
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Lavadora.prototype.limpia = function () {
        return "La lavadora se encarga de la lavar a repa";
    };
    Lavadora.prototype.inf = function () {
        return "La lavadora recibe informacion";
    };
    return Lavadora;
}(Electrodomesticos));
exports.Lavadora = Lavadora;
var Cocina = /** @class */ (function (_super) {
    __extends(Cocina, _super);
    function Cocina(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Cocina.prototype.calienta = function () {
        return "La cocina tiene 6 Hornillas con las cuales calientan o cocinan la comida";
    };
    return Cocina;
}(Electrodomesticos));
exports.Cocina = Cocina;
var PLancha = /** @class */ (function (_super) {
    __extends(PLancha, _super);
    function PLancha(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    PLancha.prototype.limpia = function () {
        return "la plancha se encarga planchar y desinfectar";
    };
    return PLancha;
}(Electrodomesticos));
exports.PLancha = PLancha;
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Smartphone.prototype.navegar = function () {
        return "El smartphone tiene conecciones Inalambricas";
    };
    Smartphone.prototype.inf = function () {
        return "El smartphone recibe y manda informacion";
    };
    return Smartphone;
}(Electrodomesticos));
exports.Smartphone = Smartphone;
var Microonda = /** @class */ (function (_super) {
    __extends(Microonda, _super);
    function Microonda(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Microonda.prototype.calienta = function () {
        return "El microonda tiene la funcion de calentar o llegar a cocinar a altas temperaturas";
    };
    return Microonda;
}(Electrodomesticos));
exports.Microonda = Microonda;
var Ventilador = /** @class */ (function (_super) {
    __extends(Ventilador, _super);
    function Ventilador(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Ventilador.prototype.atempera = function () {
        return "El ventilador Atempera el ambiente cuando hace calor";
    };
    return Ventilador;
}(Electrodomesticos));
exports.Ventilador = Ventilador;
var Calefactor = /** @class */ (function (_super) {
    __extends(Calefactor, _super);
    function Calefactor(nombre, precio, marca) {
        return _super.call(this, nombre, precio, marca) || this;
    }
    Calefactor.prototype.atempera = function () {
        return "El calefactor calienta el ambiente en tiempos de frio";
    };
    return Calefactor;
}(Electrodomesticos));
exports.Calefactor = Calefactor;
var electro1 = new Televisor("Televisor", 2500, "LG");
var electro2 = new Computadora("Computadora PC", 4500, "HP");
var electro3 = new Refrigerador("Refrigerador", 3000, "Master");
var electro4 = new Lavadora("LavadoraXp", 6500, "Stetic");
var electro5 = new Cocina("Cocina", 3000, "Master");
var electro6 = new PLancha("Plancha", 1500, "MacQ");
var electro7 = new Smartphone("SmarohoneApple", 4500, "Apple");
var electro8 = new Microonda("Microondas", 3200, "Lmist");
var electro9 = new Ventilador("ventilador", 1200, "VentiMax");
var electro10 = new Calefactor("Calefactor", 800, "Master Bio");
console.log(electro1.navegar());
console.log(electro1.inf());
console.log(electro2.navegar());
console.log(electro2.inf());
console.log(electro3.atempera());
console.log(electro3.inf());
console.log(electro4.inf());
console.log(electro4.limpia());
console.log(electro5.calienta());
console.log(electro6.limpia());
console.log(electro7.inf());
console.log(electro7.navegar());
console.log(electro8.calienta());
console.log(electro9.atempera());
console.log(electro10.atempera());
