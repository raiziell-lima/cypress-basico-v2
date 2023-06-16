
beforeEach(()=>{
    cy.login('61823115330', 'Rflima1999*')
    cy.visit('https://rhfront-dev.sepog.fortaleza.ce.gov.br/')
    cy.get("#infoAmbienteDetalhe", {timeout: 10000 }).contains('Recursos Humanos -Homologacao- [SEPOG] - Raiziell Ferreira Lima - Perfil Administrador')
    
})



it('Busca Simples', () => {
    cy.visit('https://rhfront-dev.sepog.fortaleza.ce.gov.br/')

    cy.get("#infoAmbienteDetalhe", {timeout: 10000 }).contains('Recursos Humanos -Homologacao- [SEPOG] - Raiziell Ferreira Lima - Perfil Administrador')

    cy.get('p.MuiTypography-root-133').contains("GESTÃO DE SUPRIMENTOS").click()

    cy.get('div.MuiListItemText-root-117').contains("Dados Pessoais").click()

    cy.get('h4.FuncionarioPage-cardTitleWhite-437').contains("Dados Pessoais")

    cy.get('input#nome').type('João Pedro')
})

it('Consulta de Folhas', () => {
    cy.visit('https://rhfront-dev.sepog.fortaleza.ce.gov.br/')

    cy.get("#infoAmbienteDetalhe", {timeout: 10000 }).contains('Recursos Humanos -Homologacao- [SEPOG] - Raiziell Ferreira Lima - Perfil Administrador')

    cy.get('p.MuiTypography-root-133').contains("FOLHA DE PAGAMENTO").click()

    cy.get('div.MuiListItemText-root-117').contains("Movimento de Folha").click()
})