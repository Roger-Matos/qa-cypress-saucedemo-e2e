/**
 * Teste: Login com usuário bloqueado
 * 
 * Cenário: Tentativa de login com usuário bloqueado
 * Usuário: locked_out_user
 * Senha: secret_sauce
 * 
 * Validação: Deve exibir mensagem informando bloqueio
 */








import { USERS, MESSAGES, TIMEOUTS } from '../../support/constants';
import { LOGIN_SELECTORS } from '../../support/selectors';

describe('Módulo: Login - Usuário Bloqueado', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Deve exibir mensagem informando bloqueio ao tentar login com usuário bloqueado', () => {
    // Tenta realizar login com usuário bloqueado
    cy.login(USERS.LOCKED_OUT.username, USERS.LOCKED_OUT.password);

    // Valida que permaneceu na página de login
    cy.url().should('not.include', '/inventory.html');

    // Valida exibição da mensagem de erro específica para usuário bloqueado
    cy.get(LOGIN_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .should('contain.text', MESSAGES.LOGIN_ERROR_LOCKED_OUT);

    // Valida que o botão de fechar erro está presente
    cy.get(LOGIN_SELECTORS.ERROR_BUTTON)
      .should('be.visible');
  });
});
