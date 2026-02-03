/**
 * Selectors do módulo de Checkout
 * Centraliza todos os locators relacionados ao processo de checkout
 */

export const CHECKOUT_SELECTORS = {
  // Formulário Step One (Informações)
  INPUT_FIRST_NAME: '[data-test="firstName"]',
  INPUT_LAST_NAME: '[data-test="lastName"]',
  INPUT_POSTAL_CODE: '[data-test="postalCode"]',
  BUTTON_CONTINUE: '[data-test="continue"]',
  BUTTON_CANCEL: '[data-test="cancel"]',
  ERROR_MESSAGE: '[data-test="error"]',
  
  // Step Two (Resumo)
  SUMMARY_INFO: '.summary_info',
  SUMMARY_SUBTOTAL: '.summary_subtotal_label',
  SUMMARY_TAX: '.summary_tax_label',
  SUMMARY_TOTAL: '.summary_total_label',
  BUTTON_FINISH: '[data-test="finish"]',
  BUTTON_CANCEL_STEP_TWO: '[data-test="cancel"]',
  
  // Step Complete (Finalização)
  COMPLETE_CONTAINER: '#checkout_complete_container',
  COMPLETE_HEADER: '.complete-header',
  COMPLETE_TEXT: '.complete-text',
  BUTTON_BACK_HOME: '[data-test="back-to-products"]',
  
  // Itens no resumo
  CART_ITEM: '.cart_item',
  ITEM_NAME: '.inventory_item_name',
  ITEM_DESCRIPTION: '.inventory_item_desc',
  ITEM_PRICE: '.inventory_item_price',
  ITEM_QUANTITY: '.cart_quantity'
};

