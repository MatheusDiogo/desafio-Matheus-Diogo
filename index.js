import {CaixaDaLanchonete} from "./src/caixa-da-lanchonete.js";

const pedido = ['cafe,1', 'pizza,1', 'suco,2', 'chantily,2', 'Leite,1'];

new CaixaDaLanchonete().calcularValorDaCompra('debito', pedido);
