/**
 * Helpers de Wait
 * Funções utilitárias para aguardar elementos e condições
 * Essenciais para robustez e estabilidade, especialmente em CI
 */

/**
 * Aguarda elemento parar de se mover ou animar
 * Evita erros de "element detached" ou cliques em elementos instáveis
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms (opcional)
 */
export function waitForElementStable(selector, timeout = 10000) {
  let previousPosition = null;
  let stableCount = 0;
  const requiredStableChecks = 3;

  return cy.get(selector, { timeout }).then(($el) => {
    return new Cypress.Promise((resolve) => {
      const checkStability = () => {
        const currentPosition = $el[0].getBoundingClientRect();
        const current = `${currentPosition.x},${currentPosition.y},${currentPosition.width},${currentPosition.height}`;

        if (current === previousPosition) {
          stableCount++;
          if (stableCount >= requiredStableChecks) {
            resolve($el);
            return;
          }
        } else {
          stableCount = 0;
        }

        previousPosition = current;
        setTimeout(checkStability, 100);
      };

      checkStability();
    });
  });
}

/**
 * Aguarda elemento ter dimensões válidas (> 0x0)
 * Garante que o elemento está renderizado e visível
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms (opcional)
 */
export function waitForElementReady(selector, timeout = 10000) {
  return cy.get(selector, { timeout }).should(($el) => {
    const rect = $el[0].getBoundingClientRect();
    expect(rect.width).to.be.greaterThan(0);
    expect(rect.height).to.be.greaterThan(0);
  });
}

/**
 * Aguarda resposta específica de API (XHR/Fetch)
 * Útil para garantir que operações assíncronas foram concluídas
 * @param {string} method - Método HTTP (GET, POST, etc.)
 * @param {string} url - URL ou padrão da URL
 * @param {number} timeout - Timeout em ms (opcional)
 */
export function waitForApiResponse(method, url, timeout = 30000) {
  return cy.intercept(method, url).as('apiCall').then(() => {
    return cy.wait('@apiCall', { timeout });
  });
}

