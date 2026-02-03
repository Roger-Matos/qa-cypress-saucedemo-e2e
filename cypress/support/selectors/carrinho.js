/**
 * Selectors do módulo de Carrinho
 * Centraliza todos os locators relacionados ao carrinho de compras
 */

export const CARRINHO_SELECTORS = {
  // Container do carrinho
  CART_LIST: '.cart_list',
  CART_ITEM: '.cart_item',
  
  // Informações do item no carrinho
  ITEM_NAME: '.inventory_item_name',
  ITEM_DESCRIPTION: '.inventory_item_desc',
  ITEM_PRICE: '.inventory_item_price',
  ITEM_QUANTITY: '.cart_quantity',
  
  // Botões de ação
  BUTTON_REMOVE: 'button.cart_button',
  BUTTON_CONTINUE_SHOPPING: '[data-test="continue-shopping"]',
  BUTTON_CHECKOUT: '[data-test="checkout"]',
  
  // Badge
  SHOPPING_CART_BADGE: '.shopping_cart_badge'
};

