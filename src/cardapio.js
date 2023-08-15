export class Cardapio {
    constructor() {
        this.itens = {
            cafe: {
                descricao: "Café",
                valor: 3.00,
                extras: {
                    chantily: {
                        descricao: "Chantily (extra do Café)",
                        valor: 1.50
                    }
                }
            },
            suco: {
                descricao: "Suco Natural",
                valor: 6.20
            },
            sanduiche: {
                descricao: "Sanduíche",
                valor: 6.50,
                extras: {
                    queijo: {
                        descricao: "Queijo (extra do Sanduíche)",
                        valor: 2.00
                    }
                }
            },
            salgado: {
                descricao: "Salgado",
                valor: 7.25
            },
            combo1: {
                descricao: "1 Suco e 1 Sanduíche",
                valor: 9.50
            },
            combo2: {
                descricao: "1 Café e 1 Sanduíche",
                valor: 7.50
            }
        };
    }

    verificar_itens(pedidos) {
        const resultados = {};
        pedidos.forEach(pedido => {
            resultados[pedido] = this.itens.hasOwnProperty(pedido);
        });
        return resultados;
    }

}