export function regras(itens, cardapio){
    //Iniciando variáveis
    const pedido = cardapio.verificar_itens(itens.map(item => item.split(',')[0]));
    const pratos = {};
    let ValorTotal = 0;

    //Iniciando iteração dos itens do pedido
    itens.forEach(item => {
        //Separando pedido em nome dos itens e quantidade dos itens
        const [nomeItem, quantidade] = item.split(',');
        pratos[nomeItem] = quantidade;

        //Verificando entrada de item
        if(!parseInt(quantidade) && quantidade != undefined && nomeItem != undefined) {
            throw new Error('Quantidade inválida!');
        }else if (pedido[nomeItem]) {//Se item estiver no cardápio seu valor será acrescentado no ValorTotal
            const valorItem = cardapio.itens[nomeItem].valor * quantidade;
            ValorTotal += valorItem;
        } else {//Senão, verifica-se se ele é um item extra de outro item principal
            for (const principal in cardapio.itens) {//Laço para percorrer todos os itens principais
                //Assim, verifica-se se o item é algum item extras
                if (cardapio.itens[principal].extras && cardapio.itens[principal].extras[nomeItem]) {
                    const principalNoPedido = pedido[principal];
                    //Verifica-se se o item principal está no pedido, ou se sua quantidade é difernete de 0
                    if (principalNoPedido && parseInt(pratos[principal][0])) {
                        const valorExtra = cardapio.itens[principal].extras[nomeItem].valor * quantidade;
                        ValorTotal += valorExtra;
                        break;
                    } else {//Senão, irá retornar o erro da falta do item principal!
                        //Recomenda-se adicionar nome do item principal faltante
                        throw new Error("Item extra não pode ser pedido sem o principal");
                    }
                }
            }
        }
        //Passando por todas as regras, verifica-se se o nenhum valor foi adicionado
        //Caso ValorTotal = 0, o item não foi achado no cardápio. 
        if (!ValorTotal){
            throw new Error("Item inválido!");
        }
    });
    //Retornando Valor Total do pedido.
    return ValorTotal;
}