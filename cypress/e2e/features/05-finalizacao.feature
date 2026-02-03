# language: pt
Feature: Finalização

  Scenario: Validar resumo da compra
    Given que o usuário está autenticado
    And completou o checkout step one
    And está na página de resumo
    When visualiza o resumo da compra
    Then deve exibir o nome do produto corretamente
    And deve exibir o preço do produto corretamente
    And deve exibir subtotal, taxa e total

  Scenario: Finalizar compra com sucesso
    Given que o usuário está autenticado
    And está na página de resumo do checkout
    When clica no botão "Finish"
    Then deve exibir mensagem "Thank you for your order!"
    And deve exibir a descrição da mensagem
    And o botão "Back Home" deve estar visível

  Scenario: Voltar para home após compra
    Given que o usuário finalizou a compra com sucesso
    And está na página de conclusão
    When clica no botão "Back Home"
    Then deve ser redirecionado para a página de produtos
    And a página de produtos deve estar carregada
