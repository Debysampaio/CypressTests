describe('Teste de Login', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#user').type('deborasampaio73@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('#swal2-title').should('be.visible').should('have.text','Login realizado')

  })
})