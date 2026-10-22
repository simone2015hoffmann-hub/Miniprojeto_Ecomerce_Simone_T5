
import { Cliente } from "./types";

const clientes: Cliente[] = [];

export function cadastrarCliente(cliente: Cliente): void {
  if (!cliente.nome.trim()) {
    throw new Error("O nome do cliente é obrigatório.");
  }

  if (!cliente.email.trim() || !cliente.email.includes("@")) {
    throw new Error("E-mail inválido.");
  }

  const emailExiste = clientes.some(
    (c) => c.email.toLowerCase() === cliente.email.toLowerCase()
  );

  if (emailExiste) {
    throw new Error("Este e-mail já está cadastrado.");
  }

  if (clientes.some((c) => c.id === cliente.id)) {
    throw new Error("Já existe um cliente com esse ID.");
  }

  clientes.push({ ...cliente });
}

export function listarClientes(): Cliente[] {
  return clientes.map((cliente) => ({ ...cliente }));
}

export function buscarCliente(id: number): Cliente | undefined {
  const cliente = clientes.find((c) => c.id === id);
  return cliente ? { ...cliente } : undefined;
}
