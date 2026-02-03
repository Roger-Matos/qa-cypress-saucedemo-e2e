/**
 * Teste: Validar badge do carrinho com quantidade correta
 * 
 * Cenário: Adicionar múltiplos produtos e validar que o badge mostra a quantidade correta
 * 
 * Validação: Deve exibir quantidade correta no badge
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Carrinho - Validar Badge', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve validar badge do carrinho com quantidade correta', () => {
    const produtosParaAdicionar = [];
    
    // Captura nomes dos primeiros 3 produtos
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .then(($nomes) => {
        for (let i = 0; i < Math.min(3, $nomes.length); i++) {
          produtosParaAdicionar.push($nomes.eq(i).text().trim());
        }
      })
      .then(() => {
        // Adiciona primeiro produto
        cy.adicionarProdutoPorNome(produtosParaAdicionar[0]);
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE)
          .should('be.visible')
          .should('contain.text', '1');

        // Adiciona segundo produto
        cy.adicionarProdutoPorNome(produtosParaAdicionar[1]);
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE)
          .should('be.visible')
          .should('contain.text', '2');

        // Adiciona terceiro produto
        cy.adicionarProdutoPorNome(produtosParaAdicionar[2]);
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE)
          .should('be.visible')
          .should('contain.text', '3');

        // Valida que o badge mostra exatamente 3
        cy.get(PRODUTOS_SELECTORS.SHOPPING_CART_BADGE)
          .should('have.text', '3');
      });
  });
});
