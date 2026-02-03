// Feature: Login
// Scenario: Login com senha inválida








import { USERS, MESSAGES, TIMEOUTS } from '../../support/constants';
import { LOGIN_SELECTORS } from '../../support/selectors';

describe('Módulo: Login - Senha Inválida', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Deve exibir mensagem de erro ao tentar login com senha inválida', () => {
    // Tenta realizar login com senha incorreta
    cy.login(USERS.STANDARD.username, 'senha_incorreta');

    // Valida que permaneceu na página de login
    cy.url().should('not.include', '/inventory.html');

    // Valida exibição da mensagem de erro
    cy.get(LOGIN_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .should('contain.text', MESSAGES.LOGIN_ERROR_INVALID_CREDENTIALS);

    // Valida que o botão de fechar erro está presente
    cy.get(LOGIN_SELECTORS.ERROR_BUTTON)
      .should('be.visible');
  });
});
