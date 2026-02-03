# language: pt
Feature: Produtos

  Scenario: Listagem de produtos
    Given que o usuário está autenticado
    And está na página de produtos
    When visualiza a lista de produtos
    Then deve exibir todos os produtos com nome, descrição, preço, imagem e botão de ação

  Scenario: Ordenação de produtos por nome
    Given que o usuário está autenticado
    And está na página de produtos
    When seleciona ordenação por nome (A to Z)
    Then os produtos devem estar ordenados alfabeticamente de A para Z

  Scenario: Ordenação de produtos por preço
    Given que o usuário está autenticado
    And está na página de produtos
    When seleciona ordenação por preço (low to high)
    Then os produtos devem estar ordenados por preço do menor para o maior

  Scenario: Acessar detalhe de um produto
    Given que o usuário está autenticado
    And está na página de produtos
    When clica no nome de um produto
    Then deve exibir a página de detalhes com nome, preço, descrição e imagem corretos
