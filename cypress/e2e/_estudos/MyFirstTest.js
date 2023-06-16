Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna falso para que o Cypress ignore o erro da aplicação e não falhe no teste
    return false
})

describe('Grupo de testes', () => {

    it('Verificar título da página', () => {

        cy.visit("https://sistemas.sepog.fortaleza.ce.gov.br/guardiao/")
        cy.title().should('eq', 'Guardião : Controle de Acesso')
        
      }
    )

    it('Verificar título da página', () => {

        cy.visit("https://sistemas.sepog.fortaleza.ce.gov.br/guardiao/")
        cy.title().should('eq', 'Guardião : Controle de Acessoaa')
        
      }
    )
})