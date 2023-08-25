import Bicicleta from "./Bicicleta"
import Locadora from "./Locadora"

function main(): void {
    const bicicletas: Bicicleta[] = [
        new Bicicleta('Caloi', 'Preta', 2),
        new Bicicleta('Monark', 'Verde', 4.2),
        new Bicicleta('Bmx', 'Vermelha', 1)
    ]

    const locadora: Locadora = new Locadora('Power Guidão')

    bicicletas.forEach( bicicleta => locadora.adicionarBicicleta(bicicleta) )

    locadora.alugarBicicleta('Pod Pah', 10)
    locadora.alugarBicicleta('Caloi', 30)
    locadora.alugarBicicleta('Caloi', 30)

    locadora.devolverBicicleta('Caloi')
    locadora.alugarBicicleta('Caloi', 15)

    console.log(locadora)
}

main()
