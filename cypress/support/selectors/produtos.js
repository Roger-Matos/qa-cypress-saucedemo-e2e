/**
 * Selectors do módulo de Produtos
 * Centraliza todos os locators relacionados à listagem e detalhes de produtos
 */

export const PRODUTOS_SELECTORS = {
  // Container principal
  INVENTORY_CONTAINER: '.inventory_container',
  INVENTORY_LIST: '.inventory_list',
  INVENTORY_ITEM: '.inventory_item',
  
  // Informações do produto
  PRODUCT_NAME: '.inventory_item_name',
  PRODUCT_DESCRIPTION: '.inventory_item_desc',
  PRODUCT_PRICE: '.inventory_item_price',
  PRODUCT_IMAGE: '.inventory_item_img img',
  
  // Botões de ação
  BUTTON_ADD_TO_CART: 'button.btn_inventory',
  BUTTON_REMOVE: 'button.btn_inventory',
  
  // Ordenação
  SELECT_SORT: 'select.product_sort_container',
  
  // Badge do carrinho
  SHOPPING_CART_BADGE: '.shopping_cart_badge',
  SHOPPING_CART_LINK: '.shopping_cart_link'
};

