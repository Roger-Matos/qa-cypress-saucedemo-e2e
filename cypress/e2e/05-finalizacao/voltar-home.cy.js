// Feature: Finalização
// Scenario: Voltar para home após compra







import { TIMEOUTS, URLS } from '../../support/constants';
import { CHECKOUT_SELECTORS, PRODUTOS_SELECTORS } from '../../support/selectors';



describe('Módulo: Finalização - Voltar para Home', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve voltar para home após finalizar compra', () => {
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

          // Preenche dados do checkout
          cy.preencherCheckout(dadosTeste.checkout.valido);

          // Continua para o resumo
          cy.get(CHECKOUT_SELECTORS.BUTTON_CONTINUE)
            .should('be.visible')
            .click();

          // Finaliza compra
          cy.finalizarCompra();

          // Clica no botão de voltar para home
          cy.get(CHECKOUT_SELECTORS.BUTTON_BACK_HOME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible')
            .click();

          // Valida que foi redirecionado para a página de produtos
          cy.url().should('include', URLS.INVENTORY);

          // Valida que a página de produtos foi carregada
          cy.get(PRODUTOS_SELECTORS.INVENTORY_CONTAINER, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible');
        });
    });
  });
});
