context('Dom interaction', () => {
    before(() => {
        cy.visit('/login/')
        cy.login(Cypress.env('USER'), Cypress.env('PASS'))
    })

    it('Search by talk', function () {
        cy.getBySel('search').click().clear().type('Cypress')
        //Verificamos que encuentra 1 charla que contenga esa cadena
        cy.getBySel('speakerTable').children().should('have.length.greaterThan', 0)
    });

    it('Did not found a talk ', function () {
        cy.getBySel('search').click().clear().type('Pepito')
        //No debería encontrar ninguna charla con este nombre.
        cy.getBySel('speakerTable').should('not.exist')
        cy.getBySel('speakerTable').should(elem => {
            expect(elem).not.exist
        })
    });
})