context('Cancel a talk', () => {

    before(() => {
        cy.visit('/login/')
        cy.login(Cypress.env('USER'), Cypress.env('PASS'))
    })

    it('Cancel a talk', function () {
        //First check status
        cy.get('[data-cy=status-0]').should(text => {
         expect(text).contain.text('PROGRAMADA')
        })
        //click Cancel button of this talk
        cy.get('[data-cy=cancelButton-0]').click()
        //Check if status change
        cy.get('[data-cy=status-0]').should('contain.text', 'CANCELADA')
    });
})