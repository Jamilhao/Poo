class Conta {
    saldo: number
    correntista: Correntista

    constructor(correntista: Correntista) {
        this.saldo = 0
        this.correntista = correntista
        this.correntista.adicionarConta(this)
    }

    depositar(valor: number): void {
        this.saldo += valor
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }
}

class Correntista {
    nome: string
    contas: Conta[]
    
    constructor(nome: string) {
        this.nome = nome
        this.contas = []
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta)
    }
}

function main() {
    const correntista: Correntista = new Correntista('Willy')

    const conta: Conta = new Conta(correntista);

    console.log(conta)

    conta.depositar(1500)
    conta.sacar(500)

    console.log(conta)
}

main()
