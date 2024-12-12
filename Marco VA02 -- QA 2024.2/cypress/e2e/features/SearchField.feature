Feature: Busca no site do ICMBio

  Scenario: Realizar busca pelo termo "mico leão dourado"
    Given que estou na página de busca do ICMBio
    When eu insiro "mico leão dourado" na barra de pesquisa
    And eu clico no botão de busca
    Then um modal deve ser exibido contendo o nome científico "Leontopithecus rosalia"
