import {Cardapio} from "./cardapio.js";
import {regras} from "./regras.js";
import {Pagamento} from "./pagamento.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            if(itens.length === 0){
                throw new Error("Não há itens no carrinho de compra!");
            }
            return Pagamento(metodoDePagamento, regras(itens, cardapio));
        }catch (error) {
            return error.message;
            }
    }
}

export { CaixaDaLanchonete };