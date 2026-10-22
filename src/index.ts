import {
   cadastrarProduto,
   listarProdutos,
   buscarProduto,
   buscarProdutosPorNome,
   filtrarPorCategoria,
 } from "./produtos";

import {
  cadastrarCliente,
  listarClientes
} from "./clientes";

import {
  adicionarAoCarrinho,
  listarCarrinho,
  calcularSubtotal,
  calcularTotal,
  alterarQuantidade,
  removerDoCarrinho
} from "./carrinho";

import {
  finalizarPedido,
  listarPedidos,
  buscarPedidosPorCliente,
} from "./pedidos";

import {
    gerarRelatorioVendas,
} from "./relatorios";

// Cadastrar produtos
cadastrarProduto({
  id: 1,
  nome: "Boné esportivo",
  categoria: "acessórios",
  preco: 79.90,
  estoque: 10
});

cadastrarProduto({
  id: 2,
  nome: "T-shirt",
  categoria: "Vestuario",
  preco: 49.90,
  estoque: 5
});

// Cadastrar cliente
cadastrarCliente({
  id: 1,
  nome: "João Silva",
  email: "joao@email.com"
});

cadastrarCliente({
  id: 2,
  nome: "Maria Souza",
  email: "maria@email.com"
});

cadastrarCliente({
  id: 3,
  nome: "Pedro Santos",
  email: "pedro@email.com"
});

// Mostrar produtos
console.log("=== PRODUTOS ===");
console.log(listarProdutos());

// Adicionar produtos ao carrinho
adicionarAoCarrinho(listarProdutos()[0], 2);
adicionarAoCarrinho(listarProdutos()[1], 1);

// Mostrar carrinho
console.log("=== CARRINHO ===");
console.log(listarCarrinho());
console.log("Total: R$", calcularTotal().toFixed(2));

// Finalizar pedido
const pedido = finalizarPedido(1);

console.log("=== PEDIDO FINALIZADO ===");
console.log(pedido);

// Mostrar pedidos registrados
console.log("=== RELATÓRIO DE PEDIDOS ===");
console.log(listarPedidos());

// Mostrar estoque atualizado
console.log("=== ESTOQUE ATUALIZADO ===");
console.log(listarProdutos());

console.log("=== BUSCA DE PRODUTO POR ID ===");
console.log(buscarProduto(1));

console.log("=== BUSCA DE PRODUTO POR NOME ===");
console.log(buscarProdutosPorNome("boné"));

console.log("=== FILTRO POR CATEGORIA ===");
console.log(filtrarPorCategoria("Acessórios"));

console.log("=== CLIENTES CADASTRADOS ===");
console.log(listarClientes());

console.log("=== PEDIDOS DO CLIENTE 1 ===");
console.log(buscarPedidosPorCliente(1));

console.log("=== SUBTOTAL DO BONÉ ===");
console.log(calcularSubtotal(1));

console.log("=== TESTE: PRODUTO INEXISTENTE ===");
try {
  buscarProduto(999);
  console.log("Busca concluída.");
} catch (erro) {
  console.log("Erro:", erro);
}

console.log("=== TESTE: QUANTIDADE ACIMA DO ESTOQUE ===");
try {
  adicionarAoCarrinho(listarProdutos()[0], 999);
} catch (erro) {
  console.log(erro instanceof Error ? erro.message : erro);
}

console.log("=== TESTE: PREÇO INVÁLIDO ===");
try {
  cadastrarProduto({
    id: 99,
    nome: "Produto inválido",
    categoria: "Teste",
    preco: -10,
    estoque: 5
  });
} catch (erro) {
  console.log(erro instanceof Error ? erro.message : erro);
}
