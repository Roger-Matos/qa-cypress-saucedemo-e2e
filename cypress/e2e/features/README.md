# Especificações BDD - Gherkin

Este diretório contém as especificações de comportamento (BDD) escritas em formato Gherkin para todos os cenários de teste do projeto.

## 📋 Estrutura

As features estão organizadas por módulo de negócio:

- **01-login.feature**: Autenticação e validações de login
- **02-produtos.feature**: Listagem, ordenação e detalhes de produtos
- **03-carrinho.feature**: Gerenciamento do carrinho de compras
- **04-checkout.feature**: Processo de checkout e validações
- **05-finalizacao.feature**: Finalização e resumo da compra
- **06-regressao.feature**: Regressão e segurança de sessão

## 🏷️ Tags Utilizadas

### Por Tipo de Teste
- `@smoke`: Testes críticos de smoke
- `@e2e`: Testes end-to-end completos
- `@regressao`: Testes de regressão

### Por Categoria
- `@positivo`: Cenários de sucesso
- `@negativo`: Cenários de erro/validação
- `@validacao`: Testes de validação
- `@navegacao`: Testes de navegação

### Por Módulo
- `@login`, `@autenticacao`
- `@produtos`, `@catalogo`
- `@carrinho`, `@compra`
- `@checkout`
- `@finalizacao`
- `@seguranca`, `@sessao`

## 📝 Estrutura de um Cenário BDD

```gherkin
@tag1 @tag2
Scenario: Descrição do cenário
  Dado que [pré-condição]
  Quando [ação]
  Então [resultado esperado]
  E [validação adicional]
```

## 🎯 Benefícios do BDD

1. **Comunicação**: Linguagem natural facilita comunicação entre stakeholders
2. **Documentação Viva**: Especificações servem como documentação executável
3. **Rastreabilidade**: Cenários podem ser vinculados a requisitos
4. **Manutenibilidade**: Mudanças de comportamento refletem diretamente nos testes
5. **Colaboração**: Product Owners e QAs podem colaborar nas especificações

## 🔄 Integração com Cypress

Estas especificações podem ser implementadas usando:
- **cypress-cucumber-preprocessor**: Plugin para executar features Gherkin no Cypress
- **@badeball/cypress-cucumber-preprocessor**: Alternativa moderna e mantida

### Instalação

```bash
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

### Configuração no `cypress.config.js`

```javascript
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
  },
});
```

### Criar Step Definitions

Crie os arquivos de step definitions em `cypress/support/step_definitions/`:

```javascript
// cypress/support/step_definitions/login.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estou na página de login do Sauce Demo', () => {
  cy.visit('/');
});

When('eu preencho o campo de usuário com {string}', (usuario) => {
  cy.get('#user-name').type(usuario);
});
```

## 📊 Cobertura

- ✅ **21 cenários** mapeados
- ✅ **6 módulos** de negócio cobertos
- ✅ **Cenários positivos e negativos** incluídos
- ✅ **Validações de campos obrigatórios** documentadas
- ✅ **Fluxos E2E completos** especificados
- ✅ **Scenario Outline** para parametrização
- ✅ **Data Tables** para dados estruturados

## 🚀 Execução

Após configurar o preprocessor:

```bash
# Executar todas as features
npm run cy:run

# Executar features específicas por tag
npx cypress run --env tags="@smoke"

# Executar features específicas por módulo
npx cypress run --env tags="@login"
```

## 📚 Referências

- [Cucumber Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [BDD Best Practices](https://cucumber.io/docs/bdd/)
