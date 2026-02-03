/**
 * Teste: Validação de Last Name no checkout
 * 
 * Cenário: Tentar fazer checkout sem preencher Last Name
 * 
 * Validação: Deve exibir erro
 */







import { TIMEOUTS, MESSAGES } from '../../support/constants';
import { CHECKOUT_SELECTORS, PRODUTOS_SELECTORS } from '../../support/selectors';



describe('Módulo: Checkout - Validação Last Name', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve exibir erro ao não preencher Last Name', () => {
    // Carrega dados de teste do fixture
    cy.fixture('dados-teste').then((dadosTeste) => {
      // Adiciona produto ao carrinho
      cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
        .first()
        .then(($el) => {
          const nomeProduto = $el.text().trim();
          cy.adicionarProdutoPorNome(nomeProduto);
        })
        .then(() => {
          // Navega para o carrinho
          cy.navegarParaCarrinho();

          // Inicia checkout
          cy.iniciarCheckout();

          // Preenche dados sem Last Name
          cy.preencherCheckout(dadosTeste.checkout.semLastName);

          // Tenta continuar
          cy.get(CHECKOUT_SELECTORS.BUTTON_CONTINUE)
            .should('be.visible')
            .click();

          // Valida mensagem de erro
          cy.get(CHECKOUT_SELECTORS.ERROR_MESSAGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible')
            .should('contain.text', MESSAGES.CHECKOUT_ERROR_LAST_NAME);
        });
    });
  });
});
