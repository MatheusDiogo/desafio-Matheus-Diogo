import {Cardapio} from "./cardapio.js";
import {regras} from "./regras.js";
import {Pagamento} from "./pagamento.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {//Iniciando calculo do pedido
            if(itens.length === 0){//Se o pedido estiver vazio, retornara erro.
                throw new Error("Não há itens no carrinho de compra!");
                //Recomenda-se listar itens do cardapio para evitar nova tentativa errada.
            }
            //Chamando funções que irão verificar regras e executar calculo do Valor do pedido
            return Pagamento(metodoDePagamento, regras(itens, cardapio));
        }catch (error) {//Caso funções retornem erro
            return error.message;
            }
    }
}

export { CaixaDaLanchonete };