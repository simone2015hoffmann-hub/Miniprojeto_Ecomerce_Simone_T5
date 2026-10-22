"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizarPedido = finalizarPedido;
exports.listarPedidos = listarPedidos;
exports.buscarPedidosPorCliente = buscarPedidosPorCliente;
exports.gerarRelatorioVendas = gerarRelatorioVendas;
const clientes_1 = require("./clientes");
const carrinho_1 = require("./carrinho");
const produtos_1 = require("./produtos");
const pedidos = [];
let proximoId = 1;
function finalizarPedido(clienteId) {
    const cliente = (0, clientes_1.buscarCliente)(clienteId);
    if (!cliente) {
        throw new Error("Cliente não encontrado.");
    }
    const itens = (0, carrinho_1.listarCarrinho)();
    if (itens.length === 0) {
        throw new Error("O carrinho está vazio.");
    }
    // Validar todos os itens antes de alterar qualquer estoque.
    for (const item of itens) {
        if (item.quantidade > item.produto.estoque) {
            throw new Error(`Estoque insuficiente para ${item.produto.nome}.`);
        }
    }
    const novoPedido = {
        id: proximoId,
        cliente,
        itens: itens.map((item) => ({
            produto: { ...item.produto },
            quantidade: item.quantidade
        })),
        total: (0, carrinho_1.calcularTotal)(),
        data: new Date()
    };
    // Atualizar estoque somente depois de validar todos os itens.
    for (const item of itens) {
        (0, produtos_1.atualizarEstoque)(item.produto.id, -item.quantidade);
    }
    pedidos.push(novoPedido);
    proximoId++;
    (0, carrinho_1.limparCarrinho)();
    return novoPedido;
}
function listarPedidos() {
    return pedidos.map((pedido) => ({
        ...pedido,
        cliente: { ...pedido.cliente },
        data: new Date(pedido.data),
        itens: pedido.itens.map((item) => ({
            produto: { ...item.produto },
            quantidade: item.quantidade
        }))
    }));
}
function buscarPedidosPorCliente(clienteId) {
    return listarPedidos().filter((pedido) => pedido.cliente.id === clienteId);
}
function gerarRelatorioVendas() {
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
