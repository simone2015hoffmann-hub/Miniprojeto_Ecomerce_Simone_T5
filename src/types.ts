
export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export interface Pedido {
  id: number;
  cliente: Cliente;
  itens: ItemCarrinho[];
  total: number;
  data: Date;
}
