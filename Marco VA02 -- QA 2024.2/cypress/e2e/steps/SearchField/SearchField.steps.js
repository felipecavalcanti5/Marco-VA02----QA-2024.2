/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que estou na página de busca do ICMBio', () => {
  cy.visit('https://salve.icmbio.gov.br/#/');
});

When('eu insiro {string} na barra de pesquisa', (searchTerm) => {
  cy.get('.search_bar').type(searchTerm);
});

And('eu clico no botão de busca', () => {
  cy.get('.lupa-button').click();
});

Then('um modal deve ser exibido contendo o nome científico {string}', (expectedTitle) => {
  cy.get('.modal-content').should('be.visible');
  cy.get('.modal-content').contains(expectedTitle).should('exist');
});
