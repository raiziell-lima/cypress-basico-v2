

describe('Check UI Elements', ()=>{

    /*
    it('Checking Radio Buttons', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //Visibility of radio buttons
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //Selecting radio buttons
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')
    })
*/
    it('Checking Check Boxes', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
/* 
        // Visibility of radio buttons
        cy.get('input#monday').should('be.visible')

        // Select a single checkbox
        cy.get('input#monday').check().should('be.checked')

        // Unselect a single checkbox
        cy.get('input#monday').uncheck().should('not.be.checked')
 */
        // Select all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Select the first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


    })

})