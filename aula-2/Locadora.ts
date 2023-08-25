import Bicicleta from "./Bicicleta"
import Pedido from "./Pedido"

class Locadora {
    nome: string
    bicicletas: Bicicleta[]
    renda: number
    historicoPedidos: Pedido[]

    constructor(nome: string) {
        this.nome = nome
        this.bicicletas = []
        this.renda = 0
        this.historicoPedidos = []
    }

    alugarBicicleta(modelo: string, tempoAluguel: number): Bicicleta | undefined {
        const bicicleta = this.bicicletas.find( item => item.modelo === modelo )

        if (bicicleta !== undefined) {
            const pedido: Pedido = new Pedido(bicicleta, tempoAluguel)
            this.historicoPedidos.push(pedido)
            this.renda += pedido.calcularCusto()
            this.mostrarRenda()
            return bicicleta
        } 
        
        console.log('Modelo indisponível!')
        return undefined
    }

    devolverBicicleta(modelo: string){
        const bicicleta = this.bicicletas.find( item => item.modelo === modelo )

        if (bicicleta !== undefined) {
            bicicleta.disponivel = true
        } 
    }

    adicionarBicicleta(bicicleta: Bicicleta): void {
        this.bicicletas.push(bicicleta)
    }

    mostrarRenda(): void {
        console.log(`Renda: $${this.renda}`)
    }
}

export default Locadora
