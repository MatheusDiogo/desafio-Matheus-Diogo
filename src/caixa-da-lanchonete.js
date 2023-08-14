import {Cardapio} from "./cardapio.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if(itens.length === 0){
            return console.log("Não há itens no carrinho de compra!");
        }

        const pedido = cardapio.verificar_itens(itens.map(item => item.split(',')[0]));
        let ValorTotal = 0;

        itens.forEach(item => {
            const [nomeItem, quantidade] = item.split(',');

            let invalido = 1;
            if (quantidade === '0') {
                console.log(nomeItem + ' : Quantidade inválida!');
                invalido = 0;
            }else if (pedido[nomeItem]) {
                const valorItem = cardapio.itens[nomeItem].valor * quantidade;
                console.log(nomeItem + ' (' + quantidade + 'x): R$ ' + valorItem.toFixed(2).replace('.', ','));
                ValorTotal += valorItem;
                invalido = 0;
            } else {
                for (const principal in cardapio.itens) {
                    if (cardapio.itens[principal].extras && cardapio.itens[principal].extras[nomeItem]) {
                        const principalNoPedido = pedido[principal];
                        invalido = 0;
                        if (principalNoPedido) {
                            const valorExtra = cardapio.itens[principal].extras[nomeItem].valor * quantidade;
                            console.log(nomeItem + ' (' + quantidade + 'x): R$ ' + valorExtra.toFixed(2).replace('.', ','));
                            ValorTotal += valorExtra;
                            break;
                        } else {
                            console.log(nomeItem + ": Item extra não pode ser pedido sem o principal");
                        }
                    }
                }
            }
            if (invalido){
                console.log(nomeItem + ": Item inválido!");
            }
        });

        return console.log('Total: R$ ' + ValorTotal.toFixed(2).replace('.',','));

    }
}

export { CaixaDaLanchonete };