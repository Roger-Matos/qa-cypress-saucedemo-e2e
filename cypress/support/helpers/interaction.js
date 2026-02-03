/**
 * Helpers de Interação
 * Funções utilitárias para interações robustas com elementos
 */

/**
 * Digita texto com validação flexível
 * Trata campos com maxlength automaticamente
 * @param {string} selector - Seletor do elemento
 * @param {string} text - Texto a ser digitado
 * @param {object} options - Opções adicionais do Cypress
 */
export function safeType(selector, text, options = {}) {
  return cy.get(selector).should('be.visible').then(($el) => {
    const maxLength = $el.attr('maxlength');
    const textToType = maxLength && text.length > parseInt(maxLength) 
      ? text.substring(0, parseInt(maxLength)) 
      : text;
    
    return cy.get(selector).clear().type(textToType, options);
  });
}

/**
 * Clique robusto para elementos sobrepostos ou "teimosos"
 * Tenta múltiplas estratégias de clique antes de falhar
 * @param {string} selector - Seletor do elemento
 * @param {object} options - Opções adicionais do Cypress
 */
export function superClick(selector, options = {}) {
  return cy.get(selector).should('be.visible').then(($el) => {
    // Tenta clique normal primeiro
    return cy.get(selector).click(options).then(() => {
      return $el;
    }).catch(() => {
      // Se falhar, tenta forçar visibilidade e clicar
      return cy.get(selector).scrollIntoView().should('be.visible').click({ force: true, ...options });
    });
  });
}

