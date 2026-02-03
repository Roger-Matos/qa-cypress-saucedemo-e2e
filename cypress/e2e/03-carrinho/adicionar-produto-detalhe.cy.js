// Feature: Carrinho
// Scenario: Adicionar produto ao carrinho pela página de detalhe






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Carrinho - Adicionar Produto pelo Detalhe', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve adicionar produto ao carrinho pela página de detalhe', () => {
    let nomeProduto;
    
    // Captura nome do primeiro produto
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .first()
      .then(($el) => {
        nomeProduto = $el.text().trim();
      })
      .then(() => {
        // Adiciona produto pelo detalhe
        cy.adicionarProdutoPorDetalhe(nomeProduto);

        // Valida que o badge do carrinho foi atualizado
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
          .should('be.visible')
          .should('contain.text', '1');

        // Valida que o botão mudou para "Remove"
        cy.get('.btn_inventory')
          .should('be.visible')
          .should('contain.text', 'Remove');
      });
  });
});
