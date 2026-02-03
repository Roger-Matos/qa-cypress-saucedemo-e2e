# Helpers - Documentação

Este diretório contém funções utilitárias avançadas para aumentar a robustez e estabilidade dos testes, especialmente em ambientes de CI/CD.

## 📚 Helpers Disponíveis

### `wait.js`

Helpers para aguardar condições específicas de forma inteligente.

#### `waitForElementStable(selector, timeout)`

**Quando usar:**
- Elementos que podem estar animando ou se movendo
- Evitar erros de "element detached"
- Elementos que mudam de posição dinamicamente

**Exemplo:**
```javascript
import { waitForElementStable } from '../../support/helpers/wait';

// Aguarda elemento parar de se mover antes de clicar
waitForElementStable('.modal-content').then(() => {
  cy.get('.modal-content button').click();
});
```

#### `waitForElementReady(selector, timeout)`

**Quando usar:**
- Garantir que elemento está totalmente renderizado
- Elementos que podem ter dimensões 0x0 inicialmente
- Verificar que elemento tem tamanho válido antes de interagir

**Exemplo:**
```javascript
import { waitForElementReady } from '../../support/helpers/wait';

// Aguarda elemento ter dimensões válidas
waitForElementReady('.chart-container').then(() => {
  cy.get('.chart-container').should('be.visible');
});
```

#### `waitForApiResponse(method, url, timeout)`

**Quando usar:**
- Aguardar requisições de API específicas
- Garantir que operações assíncronas foram concluídas
- Validar que dados foram carregados via API

**Exemplo:**
```javascript
import { waitForApiResponse } from '../../support/helpers/wait';

// Aguarda resposta de API antes de validar
waitForApiResponse('GET', '/api/products').then(() => {
  cy.get('.product-list').should('have.length.greaterThan', 0);
});
```

### `interaction.js`

Helpers para interações robustas com elementos.

#### `safeType(selector, text, options)`

**Quando usar:**
- Campos com `maxlength` que podem truncar texto
- Campos que podem ter validação em tempo real
- Evitar erros de digitação

**Exemplo:**
```javascript
import { safeType } from '../../support/helpers/interaction';

// Digita texto respeitando maxlength
safeType('#username', 'usuario_muito_longo_que_sera_truncado');
```

#### `superClick(selector, options)`

**Quando usar:**
- Elementos sobrepostos ou "teimosos"
- Elementos que podem estar parcialmente visíveis
- Cliques que falham ocasionalmente

**Exemplo:**
```javascript
import { superClick } from '../../support/helpers/interaction';

// Tenta múltiplas estratégias de clique
superClick('.dropdown-toggle').then(() => {
  cy.get('.dropdown-menu').should('be.visible');
});
```

## 🎯 Quando NÃO Usar

Estes helpers são para casos específicos. Para a maioria dos casos, os comandos padrão do Cypress são suficientes:

- ✅ Use `cy.get().should('be.visible')` para elementos normais
- ✅ Use `cy.get().click()` para cliques normais
- ✅ Use `cy.get().type()` para digitação normal

## 💡 Boas Práticas

1. **Prefira comandos padrão**: Use helpers apenas quando necessário
2. **Documente o uso**: Se usar um helper, explique o motivo no comentário
3. **Teste em CI**: Helpers são especialmente úteis em ambientes de CI/CD
4. **Não abuse**: Muitos helpers podem tornar os testes lentos

## 🔄 Integração com Commands

Os helpers podem ser usados dentro de commands customizados:

```javascript
import { waitForElementStable } from '../helpers/wait';

Cypress.Commands.add('clickStableElement', (selector) => {
  waitForElementStable(selector).then(() => {
    cy.get(selector).click();
  });
});
```
