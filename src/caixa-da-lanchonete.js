import {Cardapio} from "./cardapio.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            if(itens.length === 0){
                throw new Error("Não há itens no carrinho de compra!");
            }
                
            regras(itens);
            metodoDePagamento(metodoDePagamento, ValorTotal);
        }catch (error) {
            return error.message;
            }
    }
}

export { CaixaDaLanchonete };