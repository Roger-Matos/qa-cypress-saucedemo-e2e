# QA Cypress E2E — SauceDemo

[![Chrome CI](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress-chrome-only.yml/badge.svg)](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress-chrome-only.yml)
[![Cross-browser](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress.yml/badge.svg)](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress.yml)

Portfólio de automação E2E com **Cypress e JavaScript** sobre o ambiente público [SauceDemo](https://www.saucedemo.com/). O projeto demonstra organização por fluxos de negócio, reutilização de comandos, execução em CI e coleta de evidências para diagnóstico de falhas.

## O que este projeto demonstra

- Automação de jornadas críticas de e-commerce;
- organização dos testes por domínio de negócio;
- comandos e helpers reutilizáveis;
- cenários de negócio documentados em BDD/Gherkin;
- execução rápida no Chrome e regressão cross-browser;
- screenshots e vídeos como evidências de falha.

> Os arquivos `.feature` documentam o comportamento esperado em Gherkin. Os testes executáveis são implementados nos arquivos `.cy.js`.

## Cobertura

| Fluxo | Principais validações |
| --- | --- |
| Login | Acesso válido, credenciais inválidas e mensagens de erro |
| Produtos | Listagem, detalhes e ordenação |
| Carrinho | Inclusão, remoção e persistência dos itens |
| Checkout | Dados obrigatórios, resumo e conclusão da compra |
| Regressão | Jornada completa do login à finalização |

## Estrutura

```text
cypress/
  e2e/
    01-login/
    02-home-produtos/
    03-carrinho/
    04-checkout/
    05-finalizacao/
    06-regressao/
    features/
  support/
    commands/
    helpers/
```

Cada pasta de `e2e` representa um fluxo de negócio. Os comandos personalizados concentram ações reutilizáveis e os helpers apoiam sincronização e interação.

## Tecnologias

- Cypress 15;
- JavaScript;
- Node.js;
- BDD/Gherkin para documentação dos cenários;
- GitHub Actions.

## Pré-requisitos

- Node.js 22;
- npm compatível com o lockfile;
- Chrome e Firefox para execução cross-browser local.

## Início rápido

```bash
npm ci
npm run cy:open
```

Para executar em modo headless:

```bash
npm run cy:run
```

## Comandos

| Comando | Objetivo |
| --- | --- |
| `npm run cy:open` | Abre a interface interativa do Cypress |
| `npm run cy:run` | Executa toda a suíte em modo headless |
| `npm run cy:run:chrome` | Executa a suíte no Chrome |
| `npm run cy:run:firefox` | Executa a suíte no Firefox |
| `npm run cy:run:edge` | Executa a suíte no Edge |

## CI/CD

O projeto utiliza duas estratégias no GitHub Actions:

- **Chrome CI:** validação automática em pushes e pull requests para a branch `main`;
- **Cross-browser:** regressão manual em Chrome, Firefox e Edge.

Em caso de falha, screenshots são enviados como artefatos. Os vídeos são preservados ao final das execuções para facilitar a investigação.

## Limitações conhecidas

- Os testes dependem da disponibilidade e dos dados do ambiente público SauceDemo;
- os arquivos Gherkin documentam os cenários, mas não são executados por um preprocessor Cucumber.

## Autor

**Roger Matos** — Analista de QA Pleno | QA Automation Engineer

[LinkedIn](https://www.linkedin.com/in/roger-matos/) | [GitHub](https://github.com/Roger-Matos) | [E-mail](mailto:rogergabrielhid@gmail.com)
