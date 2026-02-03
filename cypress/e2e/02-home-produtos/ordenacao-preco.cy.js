/**
 * Teste: Ordenação de produtos por preço
 * 
 * Cenário: Ordenar produtos por preço (menor → maior)
 * 
 * Validação: Deve reordenar corretamente
 */






import { TIMEOUTS } from '../../support/constants';
import { PRODUTOS_SELECTORS } from '../../support/selectors';

describe('Módulo: Home / Produtos - Ordenação por Preço', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStandardUser();
  });

  it('Deve ordenar produtos por preço (menor → maior)', () => {
    // Coleta preços antes da ordenação
    let precosAntes = [];
    cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE, { timeout: TIMEOUTS.ELEMENT_VISIBLE })
      .each(($el) => {
        const texto = $el.text();
        // Extrai o valor numérico do preço (ex: "$29.99" -> 29.99)
        const valor = parseFloat(texto.replace('$', ''));
        precosAntes.push(valor);
      })
      .then(() => {
        // Ordena produtos por preço (menor → maior)
        // O comando ordenarProdutos já aguarda a reordenação ser aplicada
        cy.ordenarProdutos('lohi'); // lohi = low to high

        // Valida que os preços estão ordenados corretamente
        cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE)
          .each(($el, index) => {
            const texto = $el.text();
            const valor = parseFloat(texto.replace('$', ''));
            
            if (index > 0) {
              // Pega o preço anterior
              cy.get(PRODUTOS_SELECTORS.PRODUCT_PRICE).eq(index - 1).then(($prev) => {
                const valorAnterior = parseFloat($prev.text().replace('$', ''));
                expect(valor).to.be.at.least(valorAnterior);
              });
            }
          });
      });
  });
});
