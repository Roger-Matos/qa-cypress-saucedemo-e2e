# language: pt
Feature: Login

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When informa credenciais válidas
    Then deve acessar a página de produtos

  Scenario: Login com senha inválida
    Given que o usuário acessa a página de login
    When informa usuário válido e senha inválida
    Then deve exibir mensagem de erro de credenciais inválidas

  Scenario: Login com usuário bloqueado
    Given que o usuário acessa a página de login
    When informa credenciais de usuário bloqueado
    Then deve exibir mensagem informando que o usuário está bloqueado

  Scenario: Validação de campos obrigatórios - sem preencher campos
    Given que o usuário acessa a página de login
    When tenta fazer login sem preencher nenhum campo
    Then deve exibir mensagem de erro informando que username é obrigatório

  Scenario: Validação de campos obrigatórios - apenas username
    Given que o usuário acessa a página de login
    When preenche apenas o campo de username
    And tenta fazer login
    Then deve exibir mensagem de erro informando que password é obrigatório

  Scenario: Validação de campos obrigatórios - apenas password
    Given que o usuário acessa a página de login
    When preenche apenas o campo de password
    And tenta fazer login
    Then deve exibir mensagem de erro informando que username é obrigatório
