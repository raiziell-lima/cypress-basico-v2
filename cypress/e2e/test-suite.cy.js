
describe('Central de Atendimento ao Cliente', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Acesso à página', () => {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  it('Ex 0 - Preenche os campos obrigatórios e envia o formulário', () => {

    cy.get('input#firstName').type('Raiziell')
    cy.get('input#lastName').type('Lima')
    cy.get('input#email').type('raiziellz@gmail.com')
    cy.get('textarea#open-text-area').type('Estou com problemas para abrir o Cypress')
    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'enviar', { matchCase: false }).click()
    cy.get('.success').should('be.visible')
    
  })

  it('Ex 1 - Aplica delay no input', () => {

    cy.get('textarea#open-text-area')
    .type('Estou com problemas para abrir o Cypress. :)', {'delay':10})
    
  })

  it('Ex 2 - Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('input#firstName').type('Raiziell')
    cy.get('input#lastName').type('Lima')
    cy.get('input#email').type('raiziellz@')
    cy.get('textarea#open-text-area').type('Estou utilizando um email inválido')
    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'enviar', { matchCase: false }).click()

    cy.get('.error').should('be.visible')
    
  })
  
  it('Ex 3 - Valida o campo de telefone', () => {

    cy.get('input#phone').type('ab!.*)-!@3#$%¨&*()_+,;:').should('be.empty')
    cy.get('input#phone').type('8599009900').should('have.value', '8599009900')
    
  })

  it('Ex 4 - Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('input#firstName').type('Raiziell')
    cy.get('input#lastName').type('Lima')
    cy.get('input#email').type('raiziellz@gmail.com')
    cy.get('textarea#open-text-area').type('Não estou listando o telefone')
    cy.get('input#phone-checkbox').check().should('be.checked')

    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'enviar', { matchCase: false }).click()

    cy.get('.error').should('be.visible')
    
  })

  it('Ex 5 - Preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('input#firstName').type('Raiziell').should('have.value', 'Raiziell')
    cy.get('input#lastName').type('Lima').should('have.value', 'Lima')
    cy.get('input#email').type('raiziellz@gmail.com').should('have.value', 'raiziellz@gmail.com')
    cy.get('input#phone').type('8599009900').should('have.value', '8599009900')

    cy.get('input#firstName').clear().should('be.empty')
    cy.get('input#lastName').clear().should('be.empty')
    cy.get('input#email').clear().should('be.empty')
    cy.get('input#phone').clear().should('be.empty')
    
  })

  it('Ex 6 - Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.contains('button', 'enviar', { matchCase: false }).click()
    //cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    
  })

  it('Ex 7 - Envia o formuário com sucesso usando um comando customizado', () => {

    cy.fillMandatoryFieldsAndSubmit('Rai', 'F L', 'raizi@gmail.com', 'Algum texto')
    cy.get('.success').should('be.visible')
    
  })

  it('Seleciona um produto (YouTube) por seu texto (value)', () => {

    cy.get('select').select('YouTube').should('have.value', 'youtube')

  })

  it('Seleciona um produto (Mentoria) por seu valor (value)', () => {

    cy.get('select').select('Mentoria').should('have.value', 'mentoria')

  })

  it('Seleciona um produto (Blog) por seu índice', () => {

    cy.get('select').select(1).should('have.value', 'blog')

  })
  
  it('marca o tipo de atendimento "Feedback"', () => {

    cy.get('input[value="feedback"]')
      .check()
      .should('be.checked')
 
  })
  
  it('marca cada tipo de atendimento', () => {

    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio){
        cy.wrap($radio).check().should('be.checked')
      })

  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('a[href="privacy.html"]').should('have.attr', 'target', '_blank')
  })

  it.only('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[href="privacy.html"]').invoke('removeAttr', 'target').click()
  })

  
})