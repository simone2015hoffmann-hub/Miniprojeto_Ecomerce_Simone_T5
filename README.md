# Mini-Avaliative Project — TypeScript E-commerce

## 1. Identificação

- **Projeto:** Sistema de E-commerce
- **Estudante:** Simone Hoffmann
- **Turma:** [Back-End Node V5]
- **Linguagem:** TypeScript

## 2. Objetivo da aplicação

Desenvolver um sistema de e-commerce para uma pequena loja virtual, permitindo organizar produtos, clientes, carrinho de compras, pedidos, estoque e relatórios de vendas.

O projeto aplica os conceitos de TypeScript, funções tipadas, arrays, validações, módulos e compilação para JavaScript.

## 3. Funcionalidades implementadas

- Cadastro e listagem de produtos.
- Busca de produtos por identificador.
- Busca de produtos por nome.
- Filtro de produtos por categoria.
- Cadastro e listagem de clientes.
- Adição e remoção de itens do carrinho.
- Alteração da quantidade de produtos no carrinho.
- Cálculo de subtotal e total da compra.
- Finalização e consulta de pedidos.
- Consulta dos pedidos de um cliente.
- Atualização do estoque após a compra.
- Geração de relatórios de vendas.
- Testes de situações inválidas.

**Observação:** as funcionalidades devem ser conferidas nos módulos e demonstradas no `main.ts` antes da entrega.

## 4. Tecnologias utilizadas

- TypeScript — implementação das funcionalidades e tipagem dos dados.
- Node.js — execução da aplicação.
- npm — gerenciamento de dependências.
- Git e GitHub — versionamento e armazenamento do projeto.
- Visual Studio Code — ambiente de desenvolvimento.

## 5. Estrutura dos arquivos

```text
ecommerce-typescript/
├── src/
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   ├── relatorios.ts
│   ├── index.ts
│   └── main.ts
├── dist/
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

- **types.ts:** definição dos tipos utilizados pela aplicação.
- **produtos.ts:** operações relacionadas aos produtos.
- **clientes.ts:** operações relacionadas aos clientes.
- **carrinho.ts:** gerenciamento dos itens e cálculo dos valores.
- **pedidos.ts:** finalização e consulta de pedidos.
- **relatorios.ts:** geração de relatórios de vendas.
- **index.ts:** exemplos de utilização dos módulos.
- **main.ts:** demonstração principal das funcionalidades do sistema.
- **dist/:** arquivos JavaScript gerados durante a compilação.

## 6. Instalação, compilação e execução

### Pré-requisitos

Instalar o Node.js e o npm.

### Instalar as dependências

Na pasta principal do projeto, executar:

```bash
npm install
```

### Compilar o projeto

```bash
npx tsc
```

### Executar a demonstração principal

```bash
node dist/main.js
```

A configuração do `tsconfig.json` deve gerar o arquivo `dist/main.js` a partir de `src/main.ts`.

## 7. Exemplos das principais operações

### Cadastro de produto

```typescript
cadastrarProduto({
  id: 1,
  nome: "Boné esportivo",
  categoria: "Acessórios",
  preco: 79.90,
  estoque: 10
});
```

### Busca de produto

```typescript
console.log(buscarProduto(1));
console.log(buscarProdutosPorNome("boné"));
console.log(filtrarPorCategoria("Acessórios"));
```

### Carrinho de compras

```typescript
adicionarAoCarrinho(listarProdutos()[0], 2);

console.log(listarCarrinho());
console.log(calcularTotal().toFixed(2));
```

### Finalização de pedido

```typescript
const pedido = finalizarPedido(1);
console.log(pedido);
```

Os exemplos pressupõem que os módulos correspondentes tenham sido importados e que os produtos e clientes necessários estejam cadastrados.

## 8. Regras de negócio

O sistema deve validar as operações comerciais, incluindo:

- Identificadores únicos para produtos, clientes e pedidos.
- Nome obrigatório para produtos e clientes.
- Preço do produto maior que zero.
- Estoque não negativo.
- E-mail informado e não duplicado para clientes.
- Quantidades do carrinho maiores que zero.
- Limite de quantidade conforme o estoque disponível.
- Atualização da quantidade quando um produto já estiver no carrinho.
- Cálculo do subtotal pela multiplicação do preço unitário pela quantidade.
- Cálculo do total pela soma dos subtotais.
- Impedimento de pedidos sem itens ou associados a clientes inexistentes.
- Verificação do estoque antes de registrar o pedido.
- Atualização do estoque somente após a finalização bem-sucedida da compra.
- Registro do preço praticado no momento da compra.

As regras devem estar implementadas e ser verificadas nos respectivos módulos.

## 9. Testes de situações inválidas

A demonstração deve incluir pelo menos três situações inválidas, por exemplo:

1. Cadastro de produto com preço negativo.
2. Adição de quantidade superior ao estoque disponível.
3. Tentativa de finalizar um pedido sem itens.

Também podem ser testados produtos inexistentes, identificadores duplicados e clientes não cadastrados.

Os testes devem apresentar mensagens compreensíveis no terminal e não devem interromper indevidamente a execução.

## 10. Limitações conhecidas

- Os dados permanecem em memória durante a execução e não são preservados automaticamente ao encerrar o programa.
- Não há banco de dados ou interface gráfica.
- Não são implementados pagamentos reais, frete, cupons ou cálculo de impostos.
- A aplicação é executada pelo terminal do Node.js.
- A implementação e a cobertura dos testes dependem das funcionalidades efetivamente presentes nos módulos.

## 11. Considerações finais

O projeto tem como finalidade demonstrar a aplicação dos conceitos de TypeScript no desenvolvimento de um sistema de e-commerce modular, com operações de cadastro, consulta, carrinho, pedidos, controle de estoque e relatórios.

A aplicação pode ser compilada e executada localmente seguindo as instruções descritas neste documento.


