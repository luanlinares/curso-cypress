/// <reference types = "cypress" />

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Text', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    })

    it('Links', () => {
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        //Utilizando cy.contains (busca por texto específico)
        cy.reload(); //da um refresh na página
        cy.get('#resultado').should('have.text', 'Status: Nao cadastrado');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!');
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes')
            .type('Textarea')
            .should('have.value', 'Textarea');

        cy.get(':nth-child(4) > :nth-child(6) > input')
            .type('Test Text')
            .should('have.value', 'Test Text');

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123');

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay: 100})
            .should('have.value', 'acerto');
    })

    it('RadioButton', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked');
        
        cy.get('#formSexoFem')
            .should('not.be.checked');

        cy.get("[name='formSexo']").should('have.length', 2);
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked');

        cy.get('[name=formComidaFavorita]').click({multiple: true});
        cy.get('#formComidaPizza').should('not.be.checked');
        cy.get('#formComidaVegetariana').should('be.checked');
    })

    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp');
        
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp');

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function () {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })

    })

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada']);
        //cy.get('[data-testid=dataEsportes]').should('have.value', ['natacao', 'Corrida', 'nada'])
        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })
        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            
            .should('eql', ['natacao', 'Corrida', 'nada'])
    })
})  