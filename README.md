#  QA Cypress E2E – SauceDemo Portfolio

[![Cypress Tests](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress.yml/badge.svg)](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress.yml)
[![Cypress Chrome](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress-chrome-only.yml/badge.svg)](https://github.com/Roger-Matos/qa-cypress-saucedemo-e2e/actions/workflows/cypress-chrome-only.yml)

Projeto de automação de testes E2E com **Cypress + BDD (Gherkin)** usando o site de demonstração  
🔗 https://www.saucedemo.com  

Este repositório foi criado com foco em demonstrar minhas habilidades em:
- Estrutura de testes escalável  
- Boas práticas de automação  
- Organização por fluxo de negócio  
- Integração com CI/CD via GitHub Actions  

---

##  Objetivo

Demonstrar experiência real em:
- Automação E2E com Cypress  
- Escrita de cenários BDD (Gherkin)  
- Estrutura de projeto QA profissional  
- Execução automatizada em pipeline (CI)

---

##  Estrutura do Projeto

```text
cypress/
 └─ e2e/
     ├─ 01-login/
     ├─ 02-home-produtos/
     ├─ 03-carrinho/
     ├─ 04-checkout/
     ├─ 05-finalizacao/
     ├─ 06-regressao/
     └─ features/
         ├─ 01-login.feature
         ├─ 02-produtos.feature
         ├─ 03-carrinho.feature
         ├─ 04-checkout.feature
         ├─ 05-finalizacao.feature
         └─ 06-regressao.feature
Cada pasta representa um fluxo de negócio do sistema.

Os arquivos .feature descrevem os cenários em BDD (Gherkin), e os arquivos .cy.js implementam a automação no Cypress.

 Fluxos Automatizados
✔ Login
✔ Listagem de produtos
✔ Adição ao carrinho
✔ Validações no checkout
✔ Finalização da compra
✔ Fluxo de regressão completo

Execução Local
1️⃣ Instalar dependências
npm install
2️⃣ Abrir Cypress (modo interativo)
npx cypress open
3️⃣ Rodar todos os testes (headless)
npx cypress run
🔄 CI/CD – GitHub Actions
Este projeto possui dois pipelines:

Workflow	Descrição
cypress.yml	Executa todos os testes em ambiente CI
cypress-chrome-only.yml	Executa os testes apenas no Chrome (mais rápido)
Os testes rodam automaticamente a cada push ou pull request.

 Tecnologias
Cypress

JavaScript

BDD (Gherkin / Cucumber)

GitHub Actions

Node.js

 Autor
Roger Matos
QA Engineer | Automação de Testes | Cypress | CI/CD
