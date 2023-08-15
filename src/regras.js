export function regras(itens, cardapio){
    const pedido = cardapio.verificar_itens(itens.map(item => item.split(',')[0]));
    const pratos = {};
    let ValorTotal = 0;

    itens.forEach(item => {
        const [nomeItem, quantidade] = item.split(',');
        pratos[nomeItem] = quantidade;

        let invalido = 1;

        if(!parseInt(quantidade) && quantidade != undefined && nomeItem != undefined) {
            throw new Error('Quantidade inválida!');
        }else if (pedido[nomeItem]) {
            const valorItem = cardapio.itens[nomeItem].valor * quantidade;
            ValorTotal += valorItem;
            invalido = 0;
        } else {
            for (const principal in cardapio.itens) {
                if (cardapio.itens[principal].extras && cardapio.itens[principal].extras[nomeItem]) {
                    const principalNoPedido = pedido[principal];
                    invalido = 0;
                    if (principalNoPedido && parseInt(pratos[principal][0])) {
                        const valorExtra = cardapio.itens[principal].extras[nomeItem].valor * quantidade;
                        ValorTotal += valorExtra;
                        break;
                    } else {
                        throw new Error("Item extra não pode ser pedido sem o principal");
                    }
                }
            }
        }
        if (invalido){
            throw new Error("Item inválido!");
        }
    });
    return ValorTotal;
}