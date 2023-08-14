import {Cardapio} from "./cardapio.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pedido = cardapio.verificar_itens(itens)
        let ValorTotal = 0;

        itens.forEach(verificar => {
            if(pedido[verificar]){
                ValorTotal += cardapio.itens[verificar].valor;
            }
        });

        if(ValorTotal==0){
            console.log("Item inválido!");
        }else{
            console.log('R$ ' + ValorTotal.toFixed(2).replace('.',','));
        }

        
        // console.log(cardapio.getItem(itens.i).descricao); // "Café"
        // console.log(cardapio.getItem(itens.i).valor);     // "R$ 3,00"
    }

}

export { CaixaDaLanchonete };