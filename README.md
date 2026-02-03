# 🧪 QA Cypress - SauceDemo E2E Automation

[![Cypress Tests](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/workflows/Cypress%20Tests/badge.svg)](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions)

Projeto de automação de testes end-to-end utilizando Cypress para o site [Sauce Demo](https://www.saucedemo.com/). Este projeto demonstra uma arquitetura robusta e escalável seguindo boas práticas de automação de testes em nível sênior.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Instalação](#instalação)
- [Execução dos Testes](#execução-dos-testes)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Padrões e Convenções](#padrões-e-convenções)
- [Cobertura de Testes](#cobertura-de-testes)
- [CI/CD](#cicd)

## 🎯 Visão Geral

Este projeto implementa testes automatizados para o site Sauce Demo, cobrindo os principais fluxos da aplicação:

- **Login**: Validação de autenticação, credenciais inválidas e usuários bloqueados
- **Home/Produtos**: Listagem, ordenação e visualização de detalhes
- **Carrinho**: Adição, remoção e validação de produtos
- **Checkout**: Processo completo de compra e validações de formulário
- **Finalização**: Resumo e confirmação de compra
- **Regressão**: Logout e proteção de rotas

## 🛠 Stack Tecnológica

| Item | Detalhe |
|------|---------|
| **Framework** | Cypress 15.3.0 |
| **Runtime** | Node.js |
| **Viewport** | 1920x1080 (Full HD) |
| **Timeouts (CI)** | Command: 22.5s |
| **Retries** | CI (runMode): 2 |

## 🏗 Arquitetura do Projeto

O projeto segue uma arquitetura em camadas que separa responsabilidades e maximiza a reutilização de código:

```
cypress/
├── e2e/                     # 🧪 Casos de Teste
│   ├── 01-login/
│   ├── 02-home-produtos/
│   ├── 03-carrinho/
│   ├── 04-checkout/
│   ├── 05-finalizacao/
│   └── 06-regressao/
├── support/                 # 🧠 Camada de Suporte (Lógica)
│   ├── commands/            # Ações de negócio (ex: cy.login(), cy.adicionarProduto())
│   ├── helpers/             # Funções técnicas (ex: wait, interaction)
│   ├── constants/           # Variáveis estáticas (ex: URLs, MSGs, USERS)
│   └── selectors/           # Locators por módulo
└── fixtures/                # Massas de dados estáticas
```

### Conceito-Chave

Este projeto segue três pilares fundamentais:

1. **Testes limpos e legíveis**: Testes focam em "o quê" testar, não em "como" implementar
2. **Lógica complexa encapsulada**: Toda lógica complexa fica na camada de support
3. **Máxima reutilização**: Commands e helpers são reutilizados em múltiplos testes

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e.git
cd qa-cypress-saucedemo-e2e
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Execução dos Testes

### Modo Interativo (Cypress UI)

Abre a interface gráfica do Cypress para executar testes individualmente:

```bash
npm run cy:open
# ou diretamente:
npx cypress open
```

### Modo Headless (Linha de Comando)

Executa todos os testes em modo headless:

```bash
npm run cy:run
# ou diretamente:
npx cypress run
```

### Executar em Navegadores Específicos

```bash
# Chrome
npm run cy:run:chrome

# Firefox
npm run cy:run:firefox

# Edge
npm run cy:run:edge
```

## 📁 Estrutura de Diretórios

### `/cypress/e2e/`

Contém todos os casos de teste organizados por módulo:

- **01-login/**: Testes de autenticação
- **02-home-produtos/**: Testes de listagem e ordenação
- **03-carrinho/**: Testes de manipulação do carrinho
- **04-checkout/**: Testes do processo de checkout
- **05-finalizacao/**: Testes de finalização de compra
- **06-regressao/**: Testes de regressão e sessão

### `/cypress/support/`

Camada de suporte que contém toda a lógica reutilizável:

#### `commands/`

Encapsulam ações completas de negócio:

- **auth.js**: `cy.login()`, `cy.loginStandardUser()`, `cy.logout()`
- **navigation.js**: `cy.navegarParaHome()`, `cy.navegarParaCarrinho()`
- **produtos.js**: `cy.adicionarProdutoPorNome()`, `cy.removerProduto()`, `cy.ordenarProdutos()`
- **checkout.js**: `cy.preencherCheckout()`, `cy.finalizarCompra()`, `cy.iniciarCheckout()`

#### `helpers/`

Funções utilitárias para robustez e estabilidade:

- **wait.js**: `waitForElementStable()`, `waitForElementReady()`, `waitForApiResponse()`
- **interaction.js**: `safeType()`, `superClick()`

> 📖 Veja a [documentação completa dos helpers](cypress/support/helpers/README.md)

#### `constants/`

Centralização de valores estáticos:

- **users.js**: Credenciais de usuários
- **urls.js**: URLs da aplicação
- **messages.js**: Mensagens de erro/sucesso
- **timeouts.js**: Configurações de timeout

#### `selectors/`

Centralização de locators por módulo:

- **login.js**: Seletores do módulo de login
- **produtos.js**: Seletores do módulo de produtos
- **carrinho.js**: Seletores do módulo de carrinho
- **checkout.js**: Seletores do módulo de checkout
- **navigation.js**: Seletores de navegação geral

### `/cypress/fixtures/`

Arquivos JSON com dados estáticos para os testes:

- **dados-teste.json**: Dados de checkout, produtos, etc.

## 📝 Padrões e Convenções

### Estrutura Base de um Teste

```javascript
import { TIMEOUTS, MESSAGES } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Nome do Módulo', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve executar o cenário de teste', () => {
    // Usa commands de negócio
    cy.adicionarProdutoPorNome('Sauce Labs Backpack');
    
    // Valida com constants
    cy.contains(MESSAGES.SUCESSO, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible');
  });
});
```

### Anti-Patterns (O que NÃO fazer)

❌ **NUNCA** use `cy.wait(500)` (número fixo)  
❌ **NUNCA** use strings soltas - use `MESSAGES`  
❌ **NUNCA** implemente lógica complexa nos testes - use commands  
❌ **NUNCA** use seletores hardcoded - use `SELECTORS`

### Boas Práticas

✅ Sempre use `beforeEach()` com viewport e login quando necessário  
✅ Use commands de negócio para abstrair complexidade  
✅ Valide com constants (MESSAGES, TIMEOUTS)  
✅ Use helpers para waits inteligentes  
✅ Centralize seletores em arquivos de selectors

## 🧪 Cobertura de Testes

### Módulo: Login
- ✅ Login com usuário válido
- ✅ Login com senha inválida
- ✅ Login com usuário bloqueado
- ✅ Validação de campos obrigatórios

### Módulo: Home / Produtos
- ✅ Listagem de produtos
- ✅ Ordenação por preço (menor → maior)
- ✅ Ordenação por nome (A → Z)
- ✅ Acesso a detalhe de produto

### Módulo: Carrinho
- ✅ Adicionar produto pela home
- ✅ Adicionar produto pela página de detalhe
- ✅ Remover produto do carrinho
- ✅ Validar badge com quantidade correta

### Módulo: Checkout
- ✅ Checkout completo com dados válidos
- ✅ Validação de First Name obrigatório
- ✅ Validação de Last Name obrigatório
- ✅ Validação de Postal Code obrigatório

### Módulo: Finalização
- ✅ Validar resumo da compra (produtos, preços, taxa)
- ✅ Finalizar compra com sucesso
- ✅ Voltar para home após compra

### Módulo: Regressão / Sessão
- ✅ Logout
- ✅ Acesso direto à rota protegida sem login

**Total: 21 cenários de teste**

## 🚀 CI/CD

O projeto inclui pipelines de CI/CD configurados com GitHub Actions:

### Workflows Disponíveis

1. **`.github/workflows/cypress.yml`**
   - Executa testes em múltiplos navegadores (Chrome, Firefox, Edge)
   - Ativa em push/PR para branches principais
   - Upload automático de screenshots e vídeos em caso de falha

2. **`.github/workflows/cypress-chrome-only.yml`**
   - Versão simplificada executando apenas no Chrome
   - Mais rápido para validações rápidas
   - Ideal para desenvolvimento

### Execução Local vs CI

- **Local**: Use `npm run cy:open` para desenvolvimento interativo
- **CI**: Testes executam automaticamente em cada push/PR
- **Artifacts**: Screenshots e vídeos são salvos automaticamente em caso de falha

## 🔧 Configuração

### `cypress.config.js`

Principais configurações:

- **baseUrl**: `https://www.saucedemo.com`
- **viewportWidth**: `1920`
- **viewportHeight**: `1080`
- **defaultCommandTimeout**: `22500` (22.5s)
- **retries**: `2` (em modo CI)

## 📚 Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [Sauce Demo](https://www.saucedemo.com/)
- [Boas Práticas de Automação](https://docs.cypress.io/guides/references/best-practices)

## 🎯 Diferenciais do Projeto

- ✅ Arquitetura escalável e manutenível
- ✅ Zero waits fixos - validações inteligentes
- ✅ Helpers avançados para robustez em CI
- ✅ Pipeline CI/CD configurado
- ✅ Documentação completa
- ✅ 21 cenários de teste cobrindo fluxos críticos
- ✅ Commands customizados reutilizáveis
- ✅ Centralização de seletores e constantes

## 👤 Autor

**Roger Matos**

Projeto desenvolvido como portfólio de automação de testes demonstrando conhecimento sênior em Cypress e E2E testing.

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença ISC.

---

⭐ Se este projeto foi útil, considere dar uma estrela!
