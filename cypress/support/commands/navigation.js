/**
 * Commands de Navegação
 * Encapsula ações de navegação entre páginas
 */

import { URLS, TIMEOUTS } from '../constants';
import { NAVIGATION_SELECTORS } from '../selectors';

/**
 * Navega para a página de produtos (Home/Inventory)
 * Valida que a página foi carregada corretamente
 */
Cypress.Commands.add('navegarParaHome', () => {
  cy.visit(URLS.INVENTORY);
  cy.url().should('include', URLS.INVENTORY);
  cy.get('.inventory_container', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible');
});

/**
 * Navega para a página do carrinho
 * Valida que a página foi carregada corretamente
 */
Cypress.Commands.add('navegarParaCarrinho', () => {
  cy.get(NAVIGATION_SELECTORS.SHOPPING_CART_LINK, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .click();
  cy.url().should('include', URLS.CART);
  cy.get('.cart_list', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible');
});
