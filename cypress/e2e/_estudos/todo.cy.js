Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna falso para que o Cypress não falhe no teste
  return false
})

context('RH FOLHA', () => {
  it('Login na aplicação e Acesso ao Sistema', () => {

    cy.visit("https://sistemas.sepog.fortaleza.ce.gov.br/guardiao/Index.aspx")

    cy.get("[name='ctl00$ContentPlaceHolder1$txtLogin']").type('61823115330')

    cy.get("#ctl00_ContentPlaceHolder1_txtSenha").type('Rflima1999*{Enter}')

    cy.get("#lblUsuario").contains("Raiziell Ferreira Lima")

    cy.get("#dtlSistemas_ctl01_lblNome").click()

    cy.title().should('eq', 'RH/Folha - Prefeitura de Fortaleza')

    cy.get("#infoAmbienteDetalhe", {timeout: 10000 }).contains('Recursos Humanos -Homologacao- [SEPOG] - Raiziell Ferreira Lima - Perfil Administrador')

    cy.get('p.MuiTypography-root-133').contains("GESTÃO DE SUPRIMENTOS").click()

    cy.get('div.MuiListItemText-root-117').contains("Dados Pessoais").click()

    cy.get('h4.FuncionarioPage-cardTitleWhite-437').contains("Dados Pessoais")

    cy.get('input#nome').type('João Pedro')

    cy.get('button#botaoPesquisar').click()

  })
});