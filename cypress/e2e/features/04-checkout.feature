# language: pt
Feature: Checkout

  Scenario: Checkout completo com dados válidos
    Given que o usuário está autenticado
    And tem produtos no carrinho
    When navega para o carrinho
    And inicia o checkout
    And preenche todos os dados do checkout corretamente
    And continua para o resumo
    And finaliza a compra
    Then deve exibir mensagem de sucesso "Thank you for your order!"

  Scenario: Validação de First Name obrigatório
    Given que o usuário está autenticado
    And tem produtos no carrinho
    When navega para o carrinho
    And inicia o checkout
    And preenche o checkout sem First Name
    And tenta continuar
    Then deve exibir mensagem de erro "Error: First Name is required"

  Scenario: Validação de Last Name obrigatório
    Given que o usuário está autenticado
    And tem produtos no carrinho
    When navega para o carrinho
    And inicia o checkout
    And preenche o checkout sem Last Name
    And tenta continuar
    Then deve exibir mensagem de erro "Error: Last Name is required"

  Scenario: Validação de Postal Code obrigatório
    Given que o usuário está autenticado
    And tem produtos no carrinho
    When navega para o carrinho
    And inicia o checkout
    And preenche o checkout sem Postal Code
    And tenta continuar
    Then deve exibir mensagem de erro "Error: Postal Code is required"
