import {CaixaDaLanchonete} from "./src/caixa-da-lanchonete.js";

const pedido = ['1'];

const resultado = new CaixaDaLanchonete().calcularValorDaCompra('dinheiro', pedido);

console.log(resultado)