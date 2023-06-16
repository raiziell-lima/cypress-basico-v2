

describe('XPATH Locator Tests', () => {
    it('Login', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('input#user-name').type('standard_user')

        cy.get("#password[data-test='password']").type('secret_sauce')

        //cy.get('#login-button').click() // Via ID
        cy.get('.submit-button').click() // Via classe
        
        cy.get('.app_logo').contains('Swag Labs')


      }
    )
    it('Count N° Of Products', () =>{

        cy.xpath("//div[@id='inventory_container']/div/div").should('have.length', 7)

    })
})