/**
 * Commands de Autenticação
 * Encapsula ações completas de negócio relacionadas ao login/logout
 */

import { LOGIN_SELECTORS } from '../selectors';
import { USERS, URLS, TIMEOUTS } from '../constants';

/**
 * Realiza login genérico com usuário e senha
 * @param {string} username - Nome de usuário
 * @param {string} password - Senha
 */
Cypress.Commands.add('login', (username, password) => {
  cy.visit(URLS.LOGIN);
  cy.get(LOGIN_SELECTORS.INPUT_USERNAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .type(username);
  cy.get(LOGIN_SELECTORS.INPUT_PASSWORD)
    .should('be.visible')
    .type(password);
  cy.get(LOGIN_SELECTORS.BUTTON_LOGIN)
    .should('be.visible')
    .click();
});

/**
 * Realiza login com usuário padrão (standard_user)
 * Comando de conveniência para o usuário mais utilizado
 */
Cypress.Commands.add('loginStandardUser', () => {
  cy.login(USERS.STANDARD.username, USERS.STANDARD.password);
  // Valida que o login foi bem-sucedido verificando a página de produtos
  cy.url().should('include', URLS.INVENTORY);
  cy.get('.inventory_container', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible');
});

/**
 * Realiza logout do sistema
 * Acessa o menu e clica na opção de logout
 */
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .click();
  cy.get('#logout_sidebar_link', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .click();
  // Valida que foi redirecionado para a tela de login
  cy.url().should('eq', Cypress.config().baseUrl + URLS.LOGIN);
});
