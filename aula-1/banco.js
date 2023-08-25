"use strict";
class Conta {
    constructor(correntista) {
        this.saldo = 0;
        this.correntista = correntista;
        this.correntista.adicionarConta(this);
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
}
class Correntista {
    constructor(nome) {
        this.nome = nome;
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
}
function main() {
    const correntista = new Correntista('Willy');
    const conta = new Conta(correntista);
    console.log(conta);
    conta.depositar(1500);
    conta.sacar(500);
    console.log(conta);
}
main();
