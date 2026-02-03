/**
 * Commands de Produtos
 * Encapsula ações relacionadas à manipulação de produtos
 */

import { PRODUTOS_SELECTORS } from '../selectors';
import { TIMEOUTS } from '../constants';

/**
 * Adiciona produto ao carrinho pelo nome
 * @param {string} nomeProduto - Nome do produto a ser adicionado
 */
Cypress.Commands.add('adicionarProdutoPorNome', (nomeProduto) => {
  cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .contains(nomeProduto)
    .parents(PRODUTOS_SELECTORS.INVENTORY_ITEM)
    .within(() => {
      cy.get(PRODUTOS_SELECTORS.BUTTON_ADD_TO_CART)
        .should('be.visible')
        .should('contain.text', 'Add to cart')
        .click();
    });
  
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

/**
 * Remove produto do carrinho pelo nome
 * @param {string} nomeProduto - Nome do produto a ser removido
 */
Cypress.Commands.add('removerProduto', (nomeProduto) => {
  cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .contains(nomeProduto)
    .parents(PRODUTOS_SELECTORS.INVENTORY_ITEM)
    .within(() => {
      cy.get(PRODUTOS_SELECTORS.BUTTON_REMOVE)
        .should('be.visible')
        .should('contain.text', 'Remove')
        .click();
    });
  
  // Valida que o botão mudou para "Add to cart"
  cy.get(PRODUTOS_SELECTORS.INVENTORY_ITEM)
    .contains(nomeProduto)
    .parents(PRODUTOS_SELECTORS.INVENTORY_ITEM)
    .within(() => {
      cy.get(PRODUTOS_SELECTORS.BUTTON_ADD_TO_CART)
        .should('be.visible')
        .should('contain.text', 'Add to cart');
    });
});

/**
 * Ordena produtos por critério
 * @param {string} tipo - Tipo de ordenação (az, za, lohi, hilo)
 *   - az: Name (A to Z)
 *   - za: Name (Z to A)
 *   - lohi: Price (low to high)
 *   - hilo: Price (high to low)
 */
Cypress.Commands.add('ordenarProdutos', (tipo) => {
  // Garante que a página de produtos está carregada
  cy.get(PRODUTOS_SELECTORS.INVENTORY_CONTAINER, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible');
  
  // Aguarda o select de ordenação estar disponível
  cy.get(PRODUTOS_SELECTORS.SELECT_SORT, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .should('not.be.disabled')
    .select(tipo);
  
  // Valida que o select foi atualizado com o valor correto
  cy.get(PRODUTOS_SELECTORS.SELECT_SORT)
    .should('have.value', tipo);
  
  // Aguarda a reordenação ser aplicada
  // Verifica que a lista de produtos está visível e estável após a ordenação
  cy.get(PRODUTOS_SELECTORS.INVENTORY_LIST, { timeout: 3000 })
    .should('be.visible');
  
  // Aguarda que os produtos estejam renderizados e estáveis
  cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: 3000 })
    .should('have.length.greaterThan', 0)
    .first()
    .should('be.visible');
});

/**
 * Adiciona produto ao carrinho pela página de detalhe
 * @param {string} nomeProduto - Nome do produto
 */
Cypress.Commands.add('adicionarProdutoPorDetalhe', (nomeProduto) => {
  // Clica no produto para abrir detalhe
  cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .contains(nomeProduto)
    .click();
  
  // Valida que está na página de detalhe
  cy.url().should('include', '/inventory-item.html');
  
  // Adiciona ao carrinho
  cy.get(PRODUTOS_SELECTORS.BUTTON_ADD_TO_CART)
    .should('be.visible')
    .click();
  
  // Valida que o botão mudou
  cy.get(PRODUTOS_SELECTORS.BUTTON_REMOVE)
    .should('be.visible')
    .should('contain.text', 'Remove');
});
