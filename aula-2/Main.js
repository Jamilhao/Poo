"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bicicleta_1 = __importDefault(require("./Bicicleta"));
const Locadora_1 = __importDefault(require("./Locadora"));
function main() {
    const bicicletas = [
        new Bicicleta_1.default('Caloi', 'Preta', 2),
        new Bicicleta_1.default('Monark', 'Verde', 4.2),
        new Bicicleta_1.default('Bmx', 'Vermelha', 1)
    ];
    const locadora = new Locadora_1.default('Power Guidão');
    bicicletas.forEach(bicicleta => locadora.adicionarBicicleta(bicicleta));
    locadora.alugarBicicleta('Pod Pah', 10);
    locadora.alugarBicicleta('Caloi', 30);
    locadora.alugarBicicleta('Caloi', 30);
    locadora.devolverBicicleta('Caloi');
    locadora.alugarBicicleta('Caloi', 15);
    console.log(locadora);
}
main();
