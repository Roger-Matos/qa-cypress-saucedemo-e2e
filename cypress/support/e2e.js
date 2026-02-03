// ***********************************************************
// Este arquivo é processado e carregado automaticamente antes
// dos arquivos de teste. É um ótimo lugar para colocar configuração
// global e comportamento que modifica o Cypress.
//
// Você pode ler mais aqui:
// https://on.cypress.io/configuration
// ***********************************************************

// Importa commands personalizados
import './commands/auth';
import './commands/navigation';
import './commands/produtos';
import './commands/checkout';

// Importa helpers
import './helpers/wait';
import './helpers/interaction';

// Configurações globais
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para prevenir que o Cypress falhe o teste
  // em caso de exceções não capturadas
  return false;
});
