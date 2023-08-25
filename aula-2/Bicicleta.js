"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bicicleta {
    constructor(modelo, cor, custoAluguel) {
        this.modelo = modelo;
        this.cor = cor;
        this.custoAluguel = custoAluguel;
        this.disponivel = true;
    }
    alugar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`Bicicleta ${this.modelo} de cor ${this.cor} alugada!`);
            return this.custoAluguel;
        }
        console.log('Bicicleta indisponível!');
        return 0;
    }
    darGrau() {
        const probabilidadeCair = Math.random();
        if (probabilidadeCair > 0.5) {
            console.log('Deu grau!');
        }
        else {
            console.log('Caiu, bobão! rsrs :P');
        }
    }
}
exports.default = Bicicleta;
