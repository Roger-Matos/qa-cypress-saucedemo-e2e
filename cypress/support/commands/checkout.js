/**
 * Commands de Checkout
 * Encapsula ações relacionadas ao processo de checkout
 */

import { CHECKOUT_SELECTORS } from '../selectors';
import { URLS, TIMEOUTS, MESSAGES } from '../constants';

/**
 * Preenche formulário de checkout
 * @param {object} dados - Objeto com firstname, lastname e postalCode
 */
Cypress.Commands.add('preencherCheckout', (dados) => {
  cy.url().should('include', URLS.CHECKOUT_STEP_ONE);
  
  if (dados.firstName) {
    cy.get(CHECKOUT_SELECTORS.INPUT_FIRST_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .should('be.visible')
      .clear()
      .type(dados.firstName);
  }
  
  if (dados.lastName) {
    cy.get(CHECKOUT_SELECTORS.INPUT_LAST_NAME)
      .should('be.visible')
      .clear()
      .type(dados.lastName);
  }
  
  if (dados.postalCode) {
    cy.get(CHECKOUT_SELECTORS.INPUT_POSTAL_CODE)
      .should('be.visible')
      .clear()
      .type(dados.postalCode);
  }
});

/**
 * Finaliza a compra
 * Clica no botão Finish e valida a finalização
 */
Cypress.Commands.add('finalizarCompra', () => {
  // Garante que está no step two
  cy.url().should('include', URLS.CHECKOUT_STEP_TWO);
  
  // Clica em Finish
  cy.get(CHECKOUT_SELECTORS.BUTTON_FINISH, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .click();
  
  // Valida que foi para a página de conclusão
  cy.url().should('include', URLS.CHECKOUT_COMPLETE);
  cy.get(CHECKOUT_SELECTORS.COMPLETE_HEADER, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .should('contain.text', MESSAGES.CHECKOUT_COMPLETE);
});

/**
 * Inicia o checkout a partir do carrinho
 */
Cypress.Commands.add('iniciarCheckout', () => {
  cy.url().should('include', URLS.CART);
  cy.get('[data-test="checkout"]', { timeout: TIMEOUTS.ELEMENT_VISIBLE })
    .should('be.visible')
    .click();
  
  // Valida que foi para o step one
  cy.url().should('include', URLS.CHECKOUT_STEP_ONE);
});
