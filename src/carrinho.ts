
import { ItemCarrinho, Produto } from "./types";
import { buscarProduto } from "./produtos";

const carrinho: ItemCarrinho[] = [];

export function adicionarAoCarrinho(
  produto: Produto,
  quantidade: number
): void {
  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    throw new Error("A quantidade deve ser um inteiro maior que zero.");
  }

  const produtoAtual = buscarProduto(produto.id);

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
  } else {
    carrinho.push({
      produto: produtoAtual,
      quantidade
    });
  }
}

export function alterarQuantidade(
  produtoId: number,
  novaQuantidade: number
): void {
  if (!Number.isInteger(novaQuantidade) || novaQuantidade <= 0) {
    throw new Error("A quantidade deve ser um inteiro maior que zero.");
  }

  const item = carrinho.find((i) => i.produto.id === produtoId);

  if (!item) {
    throw new Error("Item não encontrado no carrinho.");
  }

  const produtoAtual = buscarProduto(produtoId);

  if (!produtoAtual) {
    throw new Error("Produto não encontrado.");
  }

  if (novaQuantidade > produtoAtual.estoque) {
    throw new Error("Estoque insuficiente.");
  }

  item.quantidade = novaQuantidade;
}

export function removerDoCarrinho(produtoId: number): void {
  const indice = carrinho.findIndex(
    (item) => item.produto.id === produtoId
  );

  if (indice === -1) {
    throw new Error("Item não encontrado no carrinho.");
  }

  carrinho.splice(indice, 1);
}

export function listarCarrinho(): ItemCarrinho[] {
  return carrinho.map((item) => ({
    produto: { ...item.produto },
    quantidade: item.quantidade
  }));
}

export function calcularSubtotal(produtoId: number): number {
  const item = carrinho.find((i) => i.produto.id === produtoId);

  if (!item) {
    return 0;
  }

  return item.produto.preco * item.quantidade;
}

export function calcularTotal(): number {
  return carrinho.reduce(
    (total, item) =>
      total + item.produto.preco * item.quantidade,
    0
  );
}

export function limparCarrinho(): void {
  carrinho.length = 0;
}
