/**
 * Teste: Finalizar compra com sucesso
 * 
 * Cenário: Completar todo o fluxo de compra até a finalização
 * 
 * Validação: Deve exibir mensagem "THANK YOU FOR YOUR ORDER"
 */







import { TIMEOUTS, MESSAGES } from '../../support/constants';
import { CHECKOUT_SELECTORS, PRODUTOS_SELECTORS } from '../../support/selectors';



describe('Módulo: Finalização - Finalizar Compra', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve finalizar compra com sucesso e exibir mensagem de agradecimento', () => {
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

          // Valida mensagem de sucesso
          cy.get(CHECKOUT_SELECTORS.COMPLETE_HEADER, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
            .should('be.visible')
            .should('contain.text', MESSAGES.CHECKOUT_COMPLETE);

          // Valida descrição da mensagem
          cy.get(CHECKOUT_SELECTORS.COMPLETE_TEXT)
            .should('be.visible')
            .should('contain.text', MESSAGES.CHECKOUT_COMPLETE_DESCRIPTION);

          // Valida que o botão de voltar está presente
          cy.get(CHECKOUT_SELECTORS.BUTTON_BACK_HOME)
            .should('be.visible');
        });
    });
  });
});
