"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCliente = cadastrarCliente;
exports.listarClientes = listarClientes;
exports.buscarCliente = buscarCliente;
const clientes = [];
function cadastrarCliente(cliente) {
    if (!cliente.nome.trim()) {
        throw new Error("O nome do cliente é obrigatório.");
    }
    if (!cliente.email.trim() || !cliente.email.includes("@")) {
        throw new Error("E-mail inválido.");
    }
    const emailExiste = clientes.some((c) => c.email.toLowerCase() === cliente.email.toLowerCase());
    if (emailExiste) {
        throw new Error("Este e-mail já está cadastrado.");
    }
    if (clientes.some((c) => c.id === cliente.id)) {
        throw new Error("Já existe um cliente com esse ID.");
    }
    clientes.push({ ...cliente });
}
function listarClientes() {
    return clientes.map((cliente) => ({ ...cliente }));
}
function buscarCliente(id) {
    const cliente = clientes.find((c) => c.id === id);
    return cliente ? { ...cliente } : undefined;
}
