"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.listarProdutos = listarProdutos;
exports.buscarProduto = buscarProduto;
exports.buscarProdutosPorNome = buscarProdutosPorNome;
exports.filtrarPorCategoria = filtrarPorCategoria;
exports.atualizarProduto = atualizarProduto;
exports.removerProduto = removerProduto;
exports.atualizarEstoque = atualizarEstoque;
const produtos = [];
function cadastrarProduto(produto) {
    if (produtos.some((p) => p.id === produto.id)) {
        throw new Error("ID de produto já cadastrado.");
    }
    if (!produto.nome.trim()) {
        throw new Error("O nome é obrigatório.");
    }
    if (!produto.categoria.trim()) {
        throw new Error("A categoria é obrigatória.");
    }
    if (produto.preco <= 0 || !Number.isFinite(produto.preco)) {
        throw new Error("O preço deve ser maior que zero.");
    }
    if (!Number.isInteger(produto.estoque) || produto.estoque < 0) {
        throw new Error("O estoque deve ser um inteiro não negativo.");
    }
    produtos.push({ ...produto });
}
function listarProdutos() {
    return produtos.map((produto) => ({ ...produto }));
}
function buscarProduto(id) {
    const produto = produtos.find((p) => p.id === id);
    return produto ? { ...produto } : undefined;
}
function buscarProdutosPorNome(nome) {
    const termo = nome.trim().toLowerCase();
    if (!termo) {
        return [];
    }
    return produtos
        .filter((p) => p.nome.toLowerCase().includes(termo))
        .map((p) => ({ ...p }));
}
function filtrarPorCategoria(categoria) {
    const termo = categoria.trim().toLowerCase();
    return produtos
        .filter((p) => p.categoria.toLowerCase() === termo)
        .map((p) => ({ ...p }));
}
function atualizarProduto(id, dados) {
    const produto = produtos.find((p) => p.id === id);
    if (!produto) {
        throw new Error("Produto não encontrado.");
    }
    const atualizado = { ...produto, ...dados };
    if (!atualizado.nome.trim()) {
        throw new Error("O nome é obrigatório.");
    }
    if (!atualizado.categoria.trim()) {
        throw new Error("A categoria é obrigatória.");
    }
    if (atualizado.preco <= 0 ||
        !Number.isFinite(atualizado.preco)) {
        throw new Error("O preço deve ser maior que zero.");
    }
    if (!Number.isInteger(atualizado.estoque) ||
        atualizado.estoque < 0) {
        throw new Error("O estoque deve ser um inteiro não negativo.");
    }
    Object.assign(produto, atualizado);
}
function removerProduto(id) {
    const indice = produtos.findIndex((p) => p.id === id);
    if (indice === -1) {
        throw new Error("Produto não encontrado.");
    }
    produtos.splice(indice, 1);
}
function atualizarEstoque(id, quantidade) {
    const produto = produtos.find((p) => p.id === id);
    if (!produto) {
        throw new Error("Produto não encontrado.");
    }
    if (!Number.isInteger(quantidade)) {
        throw new Error("A quantidade deve ser um número inteiro.");
    }
    if (produto.estoque + quantidade < 0) {
        throw new Error("Estoque insuficiente.");
    }
    produto.estoque += quantidade;
}
