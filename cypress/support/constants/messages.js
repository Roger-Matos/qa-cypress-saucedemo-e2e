/**
 * Mensagens do sistema
 * Centraliza todas as mensagens de erro, sucesso e validação
 */

export const MESSAGES = {
  // Mensagens de erro de login
  LOGIN_ERROR_USERNAME_REQUIRED: 'Epic sadface: Username is required',
  LOGIN_ERROR_PASSWORD_REQUIRED: 'Epic sadface: Password is required',
  LOGIN_ERROR_INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service',
  LOGIN_ERROR_LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
  
  // Mensagens de checkout
  CHECKOUT_ERROR_FIRST_NAME: 'Error: First Name is required',
  CHECKOUT_ERROR_LAST_NAME: 'Error: Last Name is required',
  CHECKOUT_ERROR_POSTAL_CODE: 'Error: Postal Code is required',
  
  // Mensagens de sucesso
  CHECKOUT_COMPLETE: 'Thank you for your order!',
  CHECKOUT_COMPLETE_DESCRIPTION: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
};

