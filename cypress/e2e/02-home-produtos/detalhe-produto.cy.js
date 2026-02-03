/**
 * Teste: Acessar detalhe de um produto
 * 
 * Cenário: Clicar em um produto e visualizar seus detalhes
 * 
 * Validação: Deve exibir informações detalhadas do produto
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Home / Produtos - Detalhe do Produto', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve acessar detalhe de um produto e exibir informações corretas', () => {
    let nomeProduto;
    let precoProduto;
    let descricaoProduto;

    // Captura informações do primeiro produto na lista
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .first()
      .then(($el) => {
        nomeProduto = $el.text().trim();
      });

    cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE)
      .first()
      .then(($el) => {
        precoProduto = $el.text().trim();
      });

    cy.get(PRODUTOS_SELECTORS.PRODUCT_DESCRIPTION)
      .first()
      .then(($el) => {
        descricaoProduto = $el.text().trim();
      })
      .then(() => {
        // Clica no produto para abrir detalhe
        cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME)
          .first()
          .click();

        // Valida que foi redirecionado para página de detalhe
        cy.url().should('include', '/inventory-item.html');

        // Valida informações do produto na página de detalhe
        cy.get('.inventory_details_name', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
          .should('be.visible')
          .should('contain.text', nomeProduto);

        cy.get('.inventory_details_price')
          .should('be.visible')
          .should('contain.text', precoProduto);

        cy.get('.inventory_details_desc')
          .should('be.visible')
          .should('contain.text', descricaoProduto);

        // Valida que a imagem está presente
        cy.get('.inventory_details_img')
          .should('be.visible')
          .should('have.attr', 'src');

        // Valida botão de adicionar ao carrinho
        cy.get('.btn_inventory')
          .should('be.visible')
          .should('contain.text', 'Add to cart');

        // Valida botão de voltar
        cy.get('[data-test="back-to-products"]')
          .should('be.visible');
      });
  });
});
