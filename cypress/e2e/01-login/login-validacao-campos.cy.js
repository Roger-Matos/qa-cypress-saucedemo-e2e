/**
 * Teste: Validação de campos obrigatórios no login
 * 
 * Cenário: Tentativa de login sem preencher campos
 * 
 * Validação: Deve validar obrigatoriedade dos campos
 */







import { MESSAGES, TIMEOUTS } from '../../support/constants';
import { LOGIN_SELECTORS } from '../../support/selectors';

describe('Módulo: Login - Validação de Campos', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  it('Deve validar obrigatoriedade ao tentar login sem preencher campos', () => {
    // Tenta clicar no botão de login sem preencher nada
    cy.get(LOGIN_SELECTORS.BUTTON_LOGIN, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .click();

    // Valida mensagem de erro para username obrigatório
    cy.get(LOGIN_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .should('contain.text', MESSAGES.LOGIN_ERROR_USERNAME_REQUIRED);
  });

  it('Deve validar obrigatoriedade ao preencher apenas username', () => {
    // Preenche apenas username
    cy.get(LOGIN_SELECTORS.INPUT_USERNAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .type('standard_user');

    // Tenta fazer login
    cy.get(LOGIN_SELECTORS.BUTTON_LOGIN)
      .click();

    // Valida mensagem de erro para password obrigatório
    cy.get(LOGIN_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .should('contain.text', MESSAGES.LOGIN_ERROR_PASSWORD_REQUIRED);
  });

  it('Deve validar obrigatoriedade ao preencher apenas password', () => {
    // Preenche apenas password
    cy.get(LOGIN_SELECTORS.INPUT_PASSWORD, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .type('secret_sauce');

    // Tenta fazer login
    cy.get(LOGIN_SELECTORS.BUTTON_LOGIN)
      .click();

    // Valida mensagem de erro para username obrigatório
    cy.get(LOGIN_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .should('contain.text', MESSAGES.LOGIN_ERROR_USERNAME_REQUIRED);
  });
});
