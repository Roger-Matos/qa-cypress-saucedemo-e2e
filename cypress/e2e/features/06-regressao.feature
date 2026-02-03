# language: pt
Feature: Regressão

  Scenario: Logout
    Given que o usuário está autenticado
    And está na página de produtos
    When realiza logout
    Then deve ser redirecionado para a página de login
    And os campos de login devem estar visíveis

  Scenario: Acesso direto à rota protegida sem login
    Given que o usuário não está autenticado
    When tenta acessar diretamente a página de produtos
    Then deve ser redirecionado para a página de login
