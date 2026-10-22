# Miniprojeto_Ecomerce_Simone_T5# Mini E-commerce Project in TypeScript

## 1. Objetivo

Desenvolver um sistema simples de gerenciamento de e-commerce utilizando TypeScript e Node.js, aplicando conceitos de programação, organização de módulos, validação de dados e controle de estoque.

## 2. Funcionalidades

- Cadastro, listagem, busca, atualização e remoção de produtos.
- Pesquisa de produtos por nome e categoria.
- Validação de preço, estoque e identificadores de produtos.
- Cadastro e consulta de clientes.
- Validação de e-mails e prevenção de cadastros duplicados.
- Adição, alteração e remoção de itens do carrinho.
- Cálculo de subtotais e total da compra.
- Finalização de pedidos com validação de cliente e estoque.
- Consulta de pedidos por cliente.
- Atualização do estoque após a compra.
- Relatório de quantidade de pedidos, faturamento e itens vendidos.

## 3. Tecnologias utilizadas

- TypeScript
- Node.js
- npm
- Visual Studio Code

## 4. Estrutura do projeto

```text
ecommerce-typescript/
├── src/
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   ├── relatorios.ts
│   └── index.ts
├── dist/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 5. Como executar

### Pré-requisitos

Instalar o Node.js.

### Instalar as dependências

```bash
npm install
```

### Compilar o projeto

```bash
npx tsc
```

### Executar o sistema

```bash
node dist/index.js
```

## 6. Exemplos de utilização

O arquivo `src/index.ts` demonstra o cadastro de produtos e clientes, a inclusão de produtos no carrinho, o cálculo do valor da compra, a finalização de pedidos, a atualização do estoque e a geração do relatório de vendas.

## 7. Regras de negócio

- O ID de um produto ou cliente não pode ser duplicado.
- O nome e a categoria do produto são obrigatórios.
- O preço deve ser maior que zero.
- O estoque não pode ser negativo.
- O e-mail do cliente deve ser válido e não pode estar duplicado.
- A quantidade de itens deve ser um inteiro maior que zero.
- Não é permitido comprar mais unidades do que o estoque disponível.
- Um pedido exige um cliente cadastrado e um carrinho com itens.
- O estoque é atualizado após a validação dos itens do pedido.
- O pedido mantém uma cópia dos dados dos produtos no momento da compra.

## 8. Limitações conhecidas

Os dados são mantidos em memória durante a execução do programa. Ao encerrar e iniciar novamente o sistema, os cadastros e pedidos são reiniciados. O projeto não utiliza banco de dados nem possui interface gráfica.

## 9. Identificação do estudante

**Estudante:** Simone Hoffmann  
**Turma:** Turma Back-End Nodev5-Ciclo2
