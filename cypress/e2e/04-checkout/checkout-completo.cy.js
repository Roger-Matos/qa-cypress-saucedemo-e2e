// Feature: Checkout
// Scenario: Checkout completo com dados válidos





import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Checkout - Checkout Completo', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve realizar checkout completo com dados válidos', () => {
    // Carrega dados de teste do fixture
    cy.fixture('dados-teste').then((dadosTeste) => {
      // Adiciona produto ao carrinho
      cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
        .first()
        .then(($el) => {
          const nomeProduto = $el.text().trim();
          cy.adicionarProdutoPorNome(nomeProduto);
          
          // Valida que o badge do carrinho foi atualizado
          cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible')
            .should('contain.text', '1');
        })
        .then(() => {
          // Navega para o carrinho
          cy.navegarParaCarrinho();

          // Inicia checkout
          cy.iniciarCheckout();

          // Preenche dados do checkout
          cy.preencherCheckout(dadosTeste.checkout.valido);

          // Continua para o próximo passo
          cy.get('[data-test="continue"]')
            .should('be.visible')
            .click();

          // Valida que está no step two (resumo)
          cy.url().should('include', '/checkout-step-two.html');
          
          // Valida que o resumo foi carregado
          cy.get('.summary_info', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible');

          // Finaliza compra
          cy.finalizarCompra();
        });
    });
  });
});
