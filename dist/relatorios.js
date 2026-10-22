"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarRelatorioVendas = gerarRelatorioVendas;
const pedidos_1 = require("./pedidos");
function gerarRelatorioVendas() {
    const pedidos = (0, pedidos_1.listarPedidos)();
    const totalPedidos = pedidos.length;
    const faturamentoTotal = pedidos.reduce((total, pedido) => total + pedido.total, 0);
    const itensVendidos = pedidos.reduce((total, pedido) => total +
        pedido.itens.reduce((soma, item) => soma + item.quantidade, 0), 0);
    return {
        totalPedidos,
        faturamentoTotal,
        itensVendidos
    };
}
