// Feature: Regressão
// Scenario: Logout







import { URLS, TIMEOUTS } from '../../support/constants';
import { LOGIN_SELECTORS } from '../../support/selectors';

describe('Módulo: Regressão / Sessão - Logout', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve realizar logout e voltar para tela de login', () => {
    // Valida que está logado (na página de produtos)
    cy.url().should('include', URLS.INVENTORY);

    // Realiza logout
    cy.logout();

    // Valida que foi redirecionado para a tela de login
    cy.url().should('eq', Cypress.config().baseUrl + URLS.LOGIN);

    // Valida elementos da tela de login
    cy.get(LOGIN_SELECTORS.INPUT_USERNAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible');
    cy.get(LOGIN_SELECTORS.INPUT_PASSWORD)
      .should('be.visible');
    cy.get(LOGIN_SELECTORS.BUTTON_LOGIN)
      .should('be.visible');
  });
});
