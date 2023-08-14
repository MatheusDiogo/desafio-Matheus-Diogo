import {Cardapio} from "./cardapio.js";

const cardapio = new Cardapio();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        console.log(cardapio.getItem(itens.i).descricao); // "Café"
        console.log(cardapio.getItem(itens.i).valor);     // "R$ 3,00"
    }

}

export { CaixaDaLanchonete };