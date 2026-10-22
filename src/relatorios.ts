
import { listarPedidos } from "./pedidos";

export function gerarRelatorioVendas(): {
  totalPedidos: number;
  faturamentoTotal: number;
  itensVendidos: number;
} {
  const pedidos = listarPedidos();

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
