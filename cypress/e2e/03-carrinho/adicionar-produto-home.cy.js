/**
 * Teste: Adicionar produto ao carrinho pela home
 * 
 * Cenário: Adicionar produto ao carrinho a partir da página de listagem
 * 
 * Validação: Deve adicionar produto e atualizar badge do carrinho
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Carrinho - Adicionar Produto pela Home', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve adicionar produto ao carrinho pela home e validar badge', () => {
    // Seleciona o primeiro produto da lista
    let nomeProduto;
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .first()
      .then(($el) => {
        nomeProduto = $el.text().trim();
      })
      .then(() => {
        // Adiciona produto ao carrinho
        cy.adicionarProdutoPorNome(nomeProduto);

        // Valida que o badge do carrinho foi atualizado
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
          .should('be.visible')
          .should('contain.text', '1');

        // Valida que o botão mudou para "Remove"
        cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM)
          .contains(nomeProduto)
          .parents(PRODUTOS_SELECTORS.INVENTORY_ITEM)
          .within(() => {
            cy.get(PRODUTOS_SELECTORS.BUTTON_REMOVE)
              .should('be.visible')
              .should('contain.text', 'Remove');
          });
      });
  });
});
