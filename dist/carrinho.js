"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarAoCarrinho = adicionarAoCarrinho;
exports.alterarQuantidade = alterarQuantidade;
exports.removerDoCarrinho = removerDoCarrinho;
exports.listarCarrinho = listarCarrinho;
exports.calcularSubtotal = calcularSubtotal;
exports.calcularTotal = calcularTotal;
exports.limparCarrinho = limparCarrinho;
const produtos_1 = require("./produtos");
const carrinho = [];
function adicionarAoCarrinho(produto, quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        throw new Error("A quantidade deve ser um inteiro maior que zero.");
    }
    const produtoAtual = (0, produtos_1.buscarProduto)(produto.id);
    if (!produtoAtual) {
        throw new Error("Produto não encontrado.");
    }
    const item = carrinho.find((i) => i.produto.id === produto.id);
    const quantidadeAtual = item ? item.quantidade : 0;
    if (quantidadeAtual + quantidade > produtoAtual.estoque) {
        throw new Error("Estoque insuficiente.");
    }
    if (item) {
        item.quantidade += quantidade;
    }
    else {
        carrinho.push({
            produto: produtoAtual,
            quantidade
        });
    }
}
function alterarQuantidade(produtoId, novaQuantidade) {
    if (!Number.isInteger(novaQuantidade) || novaQuantidade <= 0) {
        throw new Error("A quantidade deve ser um inteiro maior que zero.");
    }
    const item = carrinho.find((i) => i.produto.id === produtoId);
    if (!item) {
        throw new Error("Item não encontrado no carrinho.");
    }
    const produtoAtual = (0, produtos_1.buscarProduto)(produtoId);
    if (!produtoAtual) {
        throw new Error("Produto não encontrado.");
    }
    if (novaQuantidade > produtoAtual.estoque) {
        throw new Error("Estoque insuficiente.");
    }
    item.quantidade = novaQuantidade;
}
function removerDoCarrinho(produtoId) {
    const indice = carrinho.findIndex((item) => item.produto.id === produtoId);
    if (indice === -1) {
        throw new Error("Item não encontrado no carrinho.");
    }
    carrinho.splice(indice, 1);
}
function listarCarrinho() {
    return carrinho.map((item) => ({
        produto: { ...item.produto },
        quantidade: item.quantidade
    }));
}
function calcularSubtotal(produtoId) {
    const item = carrinho.find((i) => i.produto.id === produtoId);
    if (!item) {
        return 0;
    }
    return item.produto.preco * item.quantidade;
}
function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
}
function limparCarrinho() {
    carrinho.length = 0;
}
