
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
  calcularTotal,
  alterarQuantidade,
  removerDoCarrinho
} from "./carrinho";

import {
  finalizarPedido,
  listarPedidos,
  buscarPedidosPorCliente
} from "./pedidos";

import { gerarRelatorioVendas } from "./relatorios";

console.log("==================================");
console.log(" DEMONSTRAÇÃO DO SISTEMA E-COMMERCE");
console.log("==================================");

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

// 2. Cadastro de três clientes
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

cadastrarCliente({
  id: 3,
  nome: "Pedro Santos",
  email: "pedro@email.com"
});

console.log(listarClientes());

// 3. Consulta de produtos
console.log("\n=== BUSCA POR ID ===");
console.log(buscarProduto(1));

console.log("\n=== BUSCA POR NOME ===");
console.log(buscarProdutosPorNome("boné"));

console.log("\n=== FILTRO POR CATEGORIA ===");
console.log(filtrarPorCategoria("Acessórios"));

// 4. Teste inválido: finalizar pedido com carrinho vazio
console.log("\n=== TESTE 1: PEDIDO SEM ITENS ===");

try {
  finalizarPedido(1);
  console.log("ATENÇÃO: o sistema aceitou um pedido vazio.");
} catch (erro) {
  console.log(
    "Validação de pedido vazio:",
    erro instanceof Error ? erro.message : erro
  );
}

// 5. Operações do carrinho
console.log("\n=== ADICIONAR AO CARRINHO ===");

const produtos = listarProdutos();

adicionarAoCarrinho(produtos[0], 2);
adicionarAoCarrinho(produtos[1], 1);

console.log(listarCarrinho());

// 6. Alterar quantidade
console.log("\n=== ALTERAR QUANTIDADE ===");

alterarQuantidade(2, 2);

console.log(listarCarrinho());

// 7. Calcular valores
console.log("\n=== VALORES DA COMPRA ===");

console.log(
  "Subtotal do boné: R$",
  calcularSubtotal(1).toFixed(2)
);

console.log(
  "Total do carrinho: R$",
  calcularTotal().toFixed(2)
);

// 8. Remover item e adicioná-lo novamente
console.log("\n=== REMOVER ITEM DO CARRINHO ===");

removerDoCarrinho(2);
console.log(listarCarrinho());

console.log("\n=== ADICIONAR NOVAMENTE ===");

adicionarAoCarrinho(produtos[1], 2);
console.log(listarCarrinho());

console.log(
  "Novo total: R$",
  calcularTotal().toFixed(2)
);

// 9. Teste inválido: quantidade acima do estoque
console.log("\n=== TESTE 2: ESTOQUE INSUFICIENTE ===");

try {
  adicionarAoCarrinho(produtos[0], 999);
  console.log("ATENÇÃO: quantidade excessiva aceita.");
} catch (erro) {
  console.log(
    "Validação de estoque:",
    erro instanceof Error ? erro.message : erro
  );
}

// 10. Teste inválido: preço negativo
console.log("\n=== TESTE 3: PREÇO NEGATIVO ===");

try {
  cadastrarProduto({
    id: 99,
    nome: "Produto inválido",
    categoria: "Teste",
    preco: -10,
    estoque: 5
  });

  console.log("ATENÇÃO: preço negativo aceito.");
} catch (erro) {
  console.log(
    "Validação de preço:",
    erro instanceof Error ? erro.message : erro
  );
}

// 11. Finalizar pedido
console.log("\n=== FINALIZAR PEDIDO ===");

const pedido = finalizarPedido(1);
console.log(pedido);

// 12. Consultar pedidos
console.log("\n=== TODOS OS PEDIDOS ===");
console.log(listarPedidos());

console.log("\n=== PEDIDOS DO CLIENTE 1 ===");
console.log(buscarPedidosPorCliente(1));

// 13. Conferir estoque após a compra
console.log("\n=== ESTOQUE APÓS A COMPRA ===");
console.log(listarProdutos());

// 14. Relatório de vendas
console.log("\n=== RELATÓRIO DE VENDAS ===");
console.log(gerarRelatorioVendas());

console.log("\n=== FIM DA DEMONSTRAÇÃO ===");
