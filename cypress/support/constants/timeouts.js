/**
 * Timeouts configuráveis
 * Centraliza todos os tempos de espera utilizados nos testes
 * Valores aumentados para maior robustez em ambientes de CI
 */

export const TIMEOUTS = {
  ELEMENT_VISIBLE: 10000,
  ELEMENT_EXIST: 8000,
  API_RESPONSE: 30000,
  FILE_UPLOAD: 45000,
  PAGE_LOAD: 30000,
  DEFAULT: 10000
};

