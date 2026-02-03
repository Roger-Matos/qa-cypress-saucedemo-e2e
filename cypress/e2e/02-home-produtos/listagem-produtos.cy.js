/**
 * Teste: Listagem de produtos
 * 
 * Cenário: Validar exibição de todos os produtos na home
 * 
 * Validação: Deve exibir todos os produtos
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Home / Produtos - Listagem', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve exibir todos os produtos na página inicial', () => {
    // Valida que o container de produtos está visível
    cy.get(PRODUTOS_SELECTORS.INVENTORY_CONTAINER, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible');

    // Valida que a lista de produtos está presente
    cy.get(PRODUTOS_SELECTORS.INVENTORY_LIST)
      .should('be.visible');

    // Valida que existem produtos na lista
    cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM)
      .should('have.length.greaterThan', 0);

    // Valida estrutura de cada produto
    cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM).each(($item) => {
      cy.wrap($item).within(() => {
        // Valida que cada produto tem nome
        cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME)
          .should('be.visible')
          .should('not.be.empty');

        // Valida que cada produto tem descrição
        cy.get(PRODUTOS_SELECTORS.PRODUCT_DESCRIPTION)
          .should('be.visible')
          .should('not.be.empty');

        // Valida que cada produto tem preço
        cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE)
          .should('be.visible')
          .should('not.be.empty');

        // Valida que cada produto tem imagem
        cy.get(PRODUTOS_SELECTORS.PRODUCT_IMAGE)
          .should('be.visible')
          .should('have.attr', 'src');

        // Valida que cada produto tem botão de ação
        cy.get(PRODUTOS_SELECTORS.BUTTON_ADD_TO_CART)
          .should('be.visible');
      });
    });
  });
});
