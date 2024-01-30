
describe('Cadastrar um email', () => {
  it('Cadastrar email com sucesso', () => {
    //acessar minha aplicação
    cy.visit('www.automationpratice.com.br/')
    //criar os steps ações
      cy.get('#top_header')
     //selecionar elemento
      //preencher um campo
     cy.get('.form-control')
        .type('deborasampaio73@gmail.com')

     // clicar em um elemento  
     cy.get('.clear .theme-btn-one.btn_md')
          .click()
      
          // fazer um assert final do teste 
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Success')
  })

  it('Login com Sucesso apertando entender', () => {
    cy.visit('www.automationpratice.com.br/')
    
    cy.get('#top_header')
   
    cy.get('.form-control')
      .type('deborasampaio73@gmail.com{enter}')
     
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Success')
  });

  it('Verificar fechamento de botão de sucesso', () => {
   
    cy.visit('www.automationpratice.com.br/')
    cy.get('#top_header')

    cy.get('.form-control')
      .type('deborasampaio73@gmail.com')
      

      cy.get('.clear .theme-btn-one.btn_md')
      .click()
  
    cy.get('.swal2-actions > .swal2-confirm')
    .click()

    cy.wait(1000)

    cy.get('#swal2-title')
        .should ('not.exist')
    
  });




})