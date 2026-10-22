
import { Pedido } from "./types";
import { buscarCliente } from "./clientes";
import {
  listarCarrinho,
  calcularTotal,
  limparCarrinho
} from "./carrinho";
import { atualizarEstoque } from "./produtos";

const pedidos: Pedido[] = [];
let proximoId = 1;

export function finalizarPedido(clienteId: number): Pedido {
  const cliente = buscarCliente(clienteId);

  if (!cliente) {
    throw new Error("Cliente não encontrado.");
  }

  const itens = listarCarrinho();

  if (itens.length === 0) {
    throw new Error("O carrinho está vazio.");
  }

  // Validar todos os itens antes de alterar qualquer estoque.
  for (const item of itens) {
    if (item.quantidade > item.produto.estoque) {
      throw new Error(
        `Estoque insuficiente para ${item.produto.nome}.`
      );
    }
  }

  const novoPedido: Pedido = {
    id: proximoId,
    cliente,
    itens: itens.map((item) => ({
      produto: { ...item.produto },
      quantidade: item.quantidade
    })),
    total: calcularTotal(),
    data: new Date()
  };

  // Atualizar estoque somente depois de validar todos os itens.
  for (const item of itens) {
    atualizarEstoque(item.produto.id, -item.quantidade);
  }

  pedidos.push(novoPedido);
  proximoId++;
  limparCarrinho();

  return novoPedido;
}

export function listarPedidos(): Pedido[] {
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

export function buscarPedidosPorCliente(
  clienteId: number
): Pedido[] {
  return listarPedidos().filter(
    (pedido) => pedido.cliente.id === clienteId
  );
}

export function gerarRelatorioVendas(): {
  totalPedidos: number;
  faturamentoTotal: number;
  itensVendidos: number;
} {
  const totalPedidos = pedidos.length;

  const faturamentoTotal = pedidos.reduce(
    (total, pedido) => total + pedido.total,
    0
  );

  const itensVendidos = pedidos.reduce(
    (total, pedido) =>
      total +
      pedido.itens.reduce(
        (soma, item) => soma + item.quantidade,
        0
      ),
    0
  );

  return {
    totalPedidos,
    faturamentoTotal,
    itensVendidos
  };
}
