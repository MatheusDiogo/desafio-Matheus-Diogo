class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

class Cardapio {
    constructor() {
        this.itens = {
            cafe: {
                descricao: "Café",
                valor: "R$ 3,00",
                extras: {
                    chantily: {
                        descricao: "Chantily (extra do Café)",
                        valor: "R$ 1,50"
                    }
                }
            },
            suco: {
                descricao: "Suco Natural",
                valor: "R$ 6,20"
            },
            sanduiche: {
                descricao: "Sanduíche",
                valor: "R$ 6,50",
                extras: {
                    queijo: {
                        descricao: "Queijo (extra do Sanduíche)",
                        valor: "R$ 2,00"
                    }
                }
            },
            salgado: {
                descricao: "Salgado",
                valor: "R$ 7,25"
            },
            combo1: {
                descricao: "1 Suco e 1 Sanduíche",
                valor: "R$ 9,50"
            },
            combo2: {
                descricao: "1 Café e 1 Sanduíche",
                valor: "R$ 7,50"
            }
        };
    }
    
    getItem(item) {
        return this.itens[item];
    }
}

export { Cardapio };

export { CaixaDaLanchonete };
