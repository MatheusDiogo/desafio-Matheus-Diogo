import {CaixaDaLanchonete} from "./src/caixa-da-lanchonete.js";

const pedido = ['cafe', 'pizza', 'suco', 'chantily', 'Leite'];

new CaixaDaLanchonete().calcularValorDaCompra('debito', pedido);
