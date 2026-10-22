"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = require("./produtos");
const clientes_1 = require("./clientes");
const carrinho_1 = require("./carrinho");
const pedidos_1 = require("./pedidos");
// Cadastrar produtos
(0, produtos_1.cadastrarProduto)({
    id: 1,
    nome: "Boné esportivo",
    categoria: "acessórios",
    preco: 79.90,
    estoque: 10
});
(0, produtos_1.cadastrarProduto)({
    id: 2,
    nome: "T-shirt",
    categoria: "Vestuario",
    preco: 49.90,
    estoque: 5
});
// Cadastrar cliente
(0, clientes_1.cadastrarCliente)({
    id: 1,
    nome: "João Silva",
    email: "joao@email.com"
});
(0, clientes_1.cadastrarCliente)({
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com"
});
(0, clientes_1.cadastrarCliente)({
    id: 3,
    nome: "Pedro Santos",
    email: "pedro@email.com"
});
// Mostrar produtos
console.log("=== PRODUTOS ===");
console.log((0, produtos_1.listarProdutos)());
// Adicionar produtos ao carrinho
(0, carrinho_1.adicionarAoCarrinho)((0, produtos_1.listarProdutos)()[0], 2);
(0, carrinho_1.adicionarAoCarrinho)((0, produtos_1.listarProdutos)()[1], 1);
// Mostrar carrinho
console.log("=== CARRINHO ===");
console.log((0, carrinho_1.listarCarrinho)());
console.log("Total: R$", (0, carrinho_1.calcularTotal)().toFixed(2));
// Finalizar pedido
const pedido = (0, pedidos_1.finalizarPedido)(1);
console.log("=== PEDIDO FINALIZADO ===");
console.log(pedido);
// Mostrar pedidos registrados
console.log("=== RELATÓRIO DE PEDIDOS ===");
console.log((0, pedidos_1.listarPedidos)());
// Mostrar estoque atualizado
console.log("=== ESTOQUE ATUALIZADO ===");
console.log((0, produtos_1.listarProdutos)());
console.log("=== BUSCA DE PRODUTO POR ID ===");
console.log((0, produtos_1.buscarProduto)(1));
console.log("=== BUSCA DE PRODUTO POR NOME ===");
console.log((0, produtos_1.buscarProdutosPorNome)("boné"));
console.log("=== FILTRO POR CATEGORIA ===");
console.log((0, produtos_1.filtrarPorCategoria)("Acessórios"));
console.log("=== CLIENTES CADASTRADOS ===");
console.log((0, clientes_1.listarClientes)());
console.log("=== PEDIDOS DO CLIENTE 1 ===");
console.log((0, pedidos_1.buscarPedidosPorCliente)(1));
console.log("=== SUBTOTAL DO BONÉ ===");
console.log((0, carrinho_1.calcularSubtotal)(1));
console.log("=== TESTE: PRODUTO INEXISTENTE ===");
try {
    (0, produtos_1.buscarProduto)(999);
    console.log("Busca concluída.");
}
catch (erro) {
    console.log("Erro:", erro);
}
console.log("=== TESTE: QUANTIDADE ACIMA DO ESTOQUE ===");
try {
    (0, carrinho_1.adicionarAoCarrinho)((0, produtos_1.listarProdutos)()[0], 999);
}
catch (erro) {
    console.log(erro instanceof Error ? erro.message : erro);
}
console.log("=== TESTE: PREÇO INVÁLIDO ===");
try {
    (0, produtos_1.cadastrarProduto)({
        id: 99,
        nome: "Produto inválido",
        categoria: "Teste",
        preco: -10,
        estoque: 5
    });
}
catch (erro) {
    console.log(erro instanceof Error ? erro.message : erro);
}
