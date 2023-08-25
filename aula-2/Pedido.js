"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(bicicleta, tempoAluguel) {
        this.bicicleta = bicicleta;
        this.tempoAluguel = tempoAluguel;
    }
    calcularCusto() {
        return this.bicicleta.alugar() * this.tempoAluguel;
    }
}
exports.default = Pedido;
