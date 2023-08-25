class Bicicleta {
    modelo: string
    cor: string
    custoAluguel: number
    disponivel: boolean

    constructor(modelo: string, cor: string, custoAluguel: number) {
        this.modelo = modelo
        this.cor = cor
        this.custoAluguel = custoAluguel
        this.disponivel = true
    }

    alugar(): number {
        if (this.disponivel) {
            this.disponivel = false
            console.log(`Bicicleta ${this.modelo} de cor ${this.cor} alugada!`)
            return this.custoAluguel
        }

        console.log('Bicicleta indisponível!')
        return 0
    }

    darGrau(): void {
        const probabilidadeCair: number = Math.random()

        if (probabilidadeCair > 0.5) {
            console.log('Deu grau!')
        } else {
            console.log('Caiu, bobão! rsrs :P')
        }
    }
}

export default Bicicleta
