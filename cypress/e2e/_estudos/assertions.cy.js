// ASSERTIONS

// Implicit Assrtions
// - Should
// - And

// Explicit Assertions
// - Expect
// - Assert 

describe('Assertions Demo', ()=> {
    it('Implicit Assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // should   and

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'raizinhoproducoes')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('exist')
        .and('be.visible')

        cy.xpath('//a').should('have.length', '5')
        cy.get('input[placeholder="Username"]').type('Admin')

        cy.get('input[placeholder="Username"]').should('have.value', 'Admin')

    })

    it('Explicit Assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click() 

        let expect_name = "Paul Collings"

        cy.get('.oxd-userdropdown-name').then((x)=>{

            let act_name = x.text()

            //BDD Style
            expect(act_name).to.equal(expect_name)
            expect(act_name).to.not.equal(expect_name)

            //TDD Style
            assert.equal(expect_name, act_name)
            assert.notEqual(expect_name, act_name)
        })

    })
})