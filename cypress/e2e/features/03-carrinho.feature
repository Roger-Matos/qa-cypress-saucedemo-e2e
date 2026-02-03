# language: pt
Feature: Carrinho

  Scenario: Adicionar produto ao carrinho pela home
    Given que o usuário está autenticado
    And está na página de produtos
    When adiciona um produto ao carrinho pela listagem
    Then o badge do carrinho deve exibir a quantidade "1"
    And o botão deve mudar para "Remove"

  Scenario: Adicionar produto ao carrinho pela página de detalhe
    Given que o usuário está autenticado
    And está na página de produtos
    When acessa a página de detalhes de um produto
    And adiciona o produto ao carrinho
    Then o badge do carrinho deve exibir a quantidade "1"
    And o botão deve mudar para "Remove"

  Scenario: Remover produto do carrinho
    Given que o usuário está autenticado
    And tem um produto no carrinho
    When remove o produto do carrinho
    Then o badge do carrinho não deve mais ser exibido
    And o botão deve voltar para "Add to cart"

  Scenario: Validar badge do carrinho com múltiplos produtos
    Given que o usuário está autenticado
    And está na página de produtos
    When adiciona três produtos ao carrinho
    Then o badge do carrinho deve exibir a quantidade "1" após o primeiro produto
    And o badge do carrinho deve exibir a quantidade "2" após o segundo produto
    And o badge do carrinho deve exibir a quantidade "3" após o terceiro produto
