// Feature: Login
// Scenario: Login com usuário válido







import { USERS, URLS, TIMEOUTS } from '../../support/constants';

describe('Módulo: Login - Login Válido', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Deve realizar login com usuário válido e acessar página de produtos', () => {
    // Realiza login
    cy.login(USERS.STANDARD.username, USERS.STANDARD.password);

    // Valida redirecionamento para página de produtos
    cy.url().should('include', URLS.INVENTORY);

    // Valida que a página de produtos foi carregada
    cy.get('.inventory_container', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible');

    // Valida que produtos estão sendo exibidos
    cy.get('.inventory_list')
      .should('be.visible')
      .find('.inventory_item')
      .should('have.length.greaterThan', 0);

    // Valida presença de elementos esperados na página
    cy.get('.product_sort_container')
      .should('be.visible');
  });
});
