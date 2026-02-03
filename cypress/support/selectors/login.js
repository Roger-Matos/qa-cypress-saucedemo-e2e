/**
 * Selectors do módulo de Login
 * Centraliza todos os locators relacionados ao login
 */

export const LOGIN_SELECTORS = {
  // Campos de entrada
  INPUT_USERNAME: '#user-name',
  INPUT_PASSWORD: '#password',
  
  // Botões
  BUTTON_LOGIN: '#login-button',
  
  // Mensagens de erro
  ERROR_MESSAGE: '[data-test="error"]',
  ERROR_BUTTON: 'button.error-button' // Mais específico para garantir que é um botão
};
