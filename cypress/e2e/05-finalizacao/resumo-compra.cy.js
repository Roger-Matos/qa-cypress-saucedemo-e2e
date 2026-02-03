// Feature: Finalização
// Scenario: Validar resumo da compra






import { TIMEOUTS } from '../../support/constants';
import { CHECKOUT_SELECTORS, PRODUTOS_SELECTORS } from '../../support/selectors';



describe('Módulo: Finalização - Resumo da Compra', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve validar resumo da compra com produtos, preços e taxa', () => {
    // Carrega dados de teste do fixture
    cy.fixture('dados-teste').then((dadosTeste) => {
      let nomeProduto;
      let precoProduto;

      // Adiciona produto ao carrinho
      cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
        .first()
        .then(($el) => {
          nomeProduto = $el.text().trim();
          cy.adicionarProdutoPorNome(nomeProduto);
        });

      // Captura preço do produto
      cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE)
        .first()
        .then(($el) => {
          precoProduto = $el.text().trim();
        })
        .then(() => {
          // Navega para o carrinho
          cy.navegarParaCarrinho();

          // Inicia checkout
          cy.iniciarCheckout();

          // Preenche dados do checkout
          cy.preencherCheckout(dadosTeste.checkout.valido);

          // Continua para o resumo
          cy.get(CHECKOUT_SELECTORS.BUTTON_CONTINUE)
            .should('be.visible')
            .click();

          // Valida que está no step two (resumo)
          cy.url().should('include', '/checkout-step-two.html');

          // Valida nome do produto no resumo
          cy.get(CHECKOUT_SELECTORS.ITEM_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible')
            .should('contain.text', nomeProduto);

          // Valida preço do produto no resumo
          cy.get(CHECKOUT_SELECTORS.ITEM_PRICE)
            .should('be.visible')
            .should('contain.text', precoProduto);

          // Valida que existe subtotal
          cy.get(CHECKOUT_SELECTORS.SUMMARY_SUBTOTAL)
            .should('be.visible')
            .should('contain.text', 'Item total:');

          // Valida que existe taxa
          cy.get(CHECKOUT_SELECTORS.SUMMARY_TAX)
            .should('be.visible')
            .should('contain.text', 'Tax:');

          // Valida que existe total
          cy.get(CHECKOUT_SELECTORS.SUMMARY_TOTAL)
            .should('be.visible')
            .should('contain.text', 'Total:');
        });
    });
  });
});
