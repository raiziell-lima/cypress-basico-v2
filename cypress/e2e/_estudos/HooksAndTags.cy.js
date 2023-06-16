//Hooks Types

//before
//after
//beforeEach
//bafteEach

describe('My Test Suite',()=>{

    before( ()=> {
        cy.log("***** Launch Application *****")
    })

    after( ()=> {
        cy.log("***** Close Application *****")
    })

    beforeEach( ()=>{
        cy.log("***** Login *****")
    })

    afterEach(()=>{
        cy.log("***** Logout *****")
    })




    it('Search', ()=> {

        cy.log("***** Searching *****")

    })

    it('Advanced search', ()=> {

        cy.log("***** Advanced Searching *****")
        
    })

    it('Listing Products', ()=> {

        cy.log("***** Listing Products *****")
        
    })


})