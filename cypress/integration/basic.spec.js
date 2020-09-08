/// <reference types = "cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Treinamento');

        //Outra forma de escrever o teste
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo');

        cy.title().then(title => {
            console.log(title)
        });

        //Outra forma para trazer mais legibilidade ao teste
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'de');

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple')
            .click()
            .should( 'have.value', 'Obrigado!');
    })
})