
import { Produto } from "./types";

const produtos: Produto[] = [];

export function cadastrarProduto(produto: Produto): void {
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

export function listarProdutos(): Produto[] {
  return produtos.map((produto) => ({ ...produto }));
}

export function buscarProduto(id: number): Produto | undefined {
  const produto = produtos.find((p) => p.id === id);
  return produto ? { ...produto } : undefined;
}

export function buscarProdutosPorNome(nome: string): Produto[] {
  const termo = nome.trim().toLowerCase();

  if (!termo) {
    return [];
  }

  return produtos
    .filter((p) => p.nome.toLowerCase().includes(termo))
    .map((p) => ({ ...p }));
}

export function filtrarPorCategoria(categoria: string): Produto[] {
  const termo = categoria.trim().toLowerCase();

  return produtos
    .filter((p) => p.categoria.toLowerCase() === termo)
    .map((p) => ({ ...p }));
}

export function atualizarProduto(
  id: number,
  dados: Partial<Omit<Produto, "id">>
): void {
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

  if (
    atualizado.preco <= 0 ||
    !Number.isFinite(atualizado.preco)
  ) {
    throw new Error("O preço deve ser maior que zero.");
  }

  if (
    !Number.isInteger(atualizado.estoque) ||
    atualizado.estoque < 0
  ) {
    throw new Error("O estoque deve ser um inteiro não negativo.");
  }

  Object.assign(produto, atualizado);
}

export function removerProduto(id: number): void {
  const indice = produtos.findIndex((p) => p.id === id);

  if (indice === -1) {
    throw new Error("Produto não encontrado.");
  }

  produtos.splice(indice, 1);
}

export function atualizarEstoque(
  id: number,
  quantidade: number
): void {
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
