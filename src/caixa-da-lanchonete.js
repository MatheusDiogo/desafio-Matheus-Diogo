import {Cardapio} from "./cardapio.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if(itens.length === 0){
            return console.log("Não há itens no carrinho de compra!");
        }

        const pedido = cardapio.verificar_itens(itens)
        let ValorTotal = 0;

        itens.forEach(item => {
            let invalido = 1;
            if (pedido[item]) {
                console.log(item + ': R$ ' + cardapio.itens[item].valor.toFixed(2).replace('.', ','));
                ValorTotal += cardapio.itens[item].valor;
                invalido = 0;
            } else {
                for (const principal in cardapio.itens) {
                    if (cardapio.itens[principal].extras && cardapio.itens[principal].extras[item]) {
                        console.log(item + ': R$ ' + cardapio.itens[principal].extras[item].valor.toFixed(2).replace('.', ','));
                        ValorTotal += cardapio.itens[principal].extras[item].valor;
                        invalido = 0;
                        break;
                    }
                }
            }
            if (invalido){
                console.log(item + ": Item inválido!");
            }
        });

        return console.log('Total: R$ ' + ValorTotal.toFixed(2).replace('.',','));

    }
}

export { CaixaDaLanchonete };