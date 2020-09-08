/// <reference types = "cypress" />

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
        cy.reload();
    })


    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona');
    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')   
            .should('exist')
            .type('Funciona');
    })

    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1');
        cy.get('#lista li span')
            .should('contain', 'Item 2');        
    })

    it('Uso do timeout', () => {
/*         cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist'); */
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1);
        cy.get('#lista li span') 
            .should('have.length', 2);   
    })

    it('Click Retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', 11)

    })

    it.only('Should x Then', () => {
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
     })

   

})