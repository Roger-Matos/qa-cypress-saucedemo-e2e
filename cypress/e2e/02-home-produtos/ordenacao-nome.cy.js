/**
 * Teste: Ordenação de produtos por nome
 * 
 * Cenário: Ordenar produtos por nome (A → Z)
 * 
 * Validação: Deve ordenar corretamente
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Home / Produtos - Ordenação por Nome', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve ordenar produtos por nome (A → Z)', () => {
    // Ordena produtos por nome (A → Z)
    // O comando ordenarProdutos já aguarda a reordenação ser aplicada
    cy.ordenarProdutos('az'); // az = a to z

    // Valida que os nomes estão ordenados corretamente
    cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .each(($el, index) => {
        const nomeAtual = $el.text().trim();
        
        if (index > 0) {
          // Compara com o nome anterior
          cy.get(PRODUTOS_SELECTORS.PRODUCT_NAME).eq(index - 1).then(($prev) => {
            const nomeAnterior = $prev.text().trim();
            // Compara strings (A vem antes de B, etc.)
            expect(nomeAtual.localeCompare(nomeAnterior)).to.be.at.least(0);
          });
        }
      });
  });
});
