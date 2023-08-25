"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = __importDefault(require("./Pedido"));
class Locadora {
    constructor(nome) {
        this.nome = nome;
        this.bicicletas = [];
        this.renda = 0;
        this.historicoPedidos = [];
    }
    alugarBicicleta(modelo, tempoAluguel) {
        const bicicleta = this.bicicletas.find(item => item.modelo === modelo);
        if (bicicleta !== undefined) {
            const pedido = new Pedido_1.default(bicicleta, tempoAluguel);
            this.historicoPedidos.push(pedido);
            this.renda += pedido.calcularCusto();
            this.mostrarRenda();
            return bicicleta;
        }
        console.log('Modelo indisponível!');
        return undefined;
    }
    devolverBicicleta(modelo) {
        const bicicleta = this.bicicletas.find(item => item.modelo === modelo);
        if (bicicleta !== undefined) {
            bicicleta.disponivel = true;
        }
    }
    adicionarBicicleta(bicicleta) {
        this.bicicletas.push(bicicleta);
    }
    mostrarRenda() {
        console.log(`Renda: $${this.renda}`);
    }
}
exports.default = Locadora;
