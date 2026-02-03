/**
 * Teste: Remover produto do carrinho
 * 
 * Cenário: Remover produto que foi adicionado ao carrinho
 * 
 * Validação: Deve remover produto e atualizar badge
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Carrinho - Remover Produto', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve remover produto do carrinho e atualizar badge', () => {
    let nomeProduto;
    
    // Adiciona produto primeiro
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .first()
      .then(($el) => {
        nomeProduto = $el.text().trim();
      })
      .then(() => {
        // Adiciona produto
        cy.adicionarProdutoPorNome(nomeProduto);

        // Valida que foi adicionado
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE)
          .should('be.visible')
          .should('contain.text', '1');

        // Remove produto
        cy.removerProduto(nomeProduto);

        // Valida que o badge foi removido (não deve existir)
        cy.get('body').then(($body) => {
          if ($body.find(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE).length > 0) {
            // Se o badge ainda existe, deve estar vazio ou não visível
            cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE).should('not.exist');
          }
        });

        // Valida que o botão voltou para "Add to cart"
        cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM)
          .contains(nomeProduto)
          .parents(PRODUTOS_SELECTORS.INVENTORY_ITEM)
          .within(() => {
            cy.get(PRODUTOS_SELECTORS.BUTTON_ADD_TO_CART)
              .should('be.visible')
              .should('contain.text', 'Add to cart');
          });
      });
  });
});
