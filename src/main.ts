
import {
  cadastrarProduto,
  listarProdutos,
  buscarProduto,
  buscarProdutosPorNome,
  filtrarPorCategoria
} from "./produtos";

import {
  cadastrarCliente,
  listarClientes
} from "./clientes";

import {
  adicionarAoCarrinho,
  listarCarrinho,
  calcularSubtotal,
  calcularTotal
} from "./carrinho";

import {
  finalizarPedido,
  listarPedidos,
  buscarPedidosPorCliente
} from "./pedidos";

import {
  gerarRelatorioVendas
} from "./relatorios";

console.log("================================");
console.log(" SISTEMA E-COMMERCE");
console.log("================================");

// 1. Cadastro de produtos
console.log("\n=== CADASTRO DE PRODUTOS ===");

cadastrarProduto({
  id: 1,
  nome: "Boné esportivo",
  categoria: "Acessórios",
  preco: 79.90,
  estoque: 10
});

cadastrarProduto({
  id: 2,
  nome: "Camiseta",
  categoria: "Vestuário",
  preco: 49.90,
  estoque: 5
});

console.log(listarProdutos());

// 2. Cadastro de clientes
console.log("\n=== CADASTRO DE CLIENTES ===");

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

console.log(listarClientes());

// 3. Busca de produto
console.log("\n=== BUSCA POR ID ===");
console.log(buscarProduto(1));

console.log("\n=== BUSCA POR NOME ===");
console.log(buscarProdutosPorNome("boné"));

console.log("\n=== FILTRO POR CATEGORIA ===");
console.log(filtrarPorCategoria("Acessórios"));

// 4. Carrinho de compras
console.log("\n=== CARRINHO DE COMPRAS ===");

const produtos = listarProdutos();

adicionarAoCarrinho(produtos[0], 2);
adicionarAoCarrinho(produtos[1], 1);

console.log(listarCarrinho());

console.log(
  "Subtotal do boné: R$",
  calcularSubtotal(1).toFixed(2)
);

console.log(
  "Total do carrinho: R$",
  calcularTotal().toFixed(2)
);

// 5. Finalização do pedido
console.log("\n=== FINALIZAÇÃO DO PEDIDO ===");

const pedido = finalizarPedido(1);
console.log(pedido);

// 6. Consulta de pedidos
console.log("\n=== PEDIDOS REGISTRADOS ===");
console.log(listarPedidos());

console.log("\n=== PEDIDOS DO CLIENTE 1 ===");
console.log(buscarPedidosPorCliente(1));

// 7. Estoque após a compra
console.log("\n=== ESTOQUE ATUALIZADO ===");
console.log(listarProdutos());

// 8. Relatório de vendas
console.log("\n=== RELATÓRIO DE VENDAS ===");
console.log(gerarRelatorioVendas());

console.log("\n=== FIM DA DEMONSTRAÇÃO ===");
