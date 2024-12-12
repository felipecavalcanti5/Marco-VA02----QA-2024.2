describe('Busca no site do ICMBio', () => {
  it('Deve exibir o modal com resultados da busca', () => {
    cy.visit('https://salve.icmbio.gov.br/#/');
    
    // Insere o termo de busca
    cy.get('.search_bar').type('mico leão dourado');
    
    // Clica no botão de busca
    cy.get('.lupa-button').click();
    
    // Verifica se o modal é exibido
    cy.get('.modal-content').should('be.visible');

    // Verifica se o título contém a parte esperada
    cy.get('.modal-content').contains('Leontopithecus rosalia').should('exist');
  });
});
