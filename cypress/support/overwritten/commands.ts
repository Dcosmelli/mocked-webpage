//RedB Conf command example
declare namespace Cypress {
    interface Chainable {
        login: typeof login;
        getBySel: typeof getBySel
    }
}
Cypress.Commands.add('login', login)
Cypress.Commands.add('getBySel', getBySel)

function login(user: string, pass: string): void {
    cy.getBySel('email').type(user)
    cy.getBySel('password').type(pass)
    cy.getBySel('submit').click()
}

function getBySel (selector:string, ...args:any[]) {
    return cy.get(`[data-cy=${selector}]`, ...args)
}
