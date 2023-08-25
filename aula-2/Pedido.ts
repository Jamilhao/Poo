import Bicicleta from "./Bicicleta"

class Pedido {
    bicicleta: Bicicleta
    tempoAluguel: number

    constructor(bicicleta: Bicicleta, tempoAluguel: number) {
        this.bicicleta = bicicleta
        this.tempoAluguel = tempoAluguel
    }

    calcularCusto(): number {
        return this.bicicleta.alugar() * this.tempoAluguel
    }
}

export default Pedido
