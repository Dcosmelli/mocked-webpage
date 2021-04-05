//En este
context('Loging', () => {
    beforeEach(() => {
        //Lo primero que hacemos antes que nada es visitar la pagina donde nos vamos a estar logeando
        cy.visit('/login/')
        cy.clearCookies()
    })

    it('Login succesgully', () => {
        //Con este ejemplo, navegamos por la pagina hasta llegar al login e ingresar las credenciales.
        Mechlogin('javier.parada@redb.ee', '1234' )
        //Verificamos que accedimos de manera correcta al portal.
        cy.location().should(url => {
            expect(url.href,).to.be.equal('http://localhost:3000/landing')

        })
    })

    it('Unsuccessfully Login', () => {
        Mechlogin('fakeloing@fake.com', 'fakepass')
        //Verificamos el mensaje que se muestra sea de login erroneo.
        cy.getBySel('error').contains('Email o contraseña incorrecta')
    })

})

//Creando funciones genericas para cada it

function Mechlogin(user: string, pass: string) {
    cy.get('#email').type(user)
    cy.get('#password').type(pass)
    cy.get('.MuiButton-root').click()

}