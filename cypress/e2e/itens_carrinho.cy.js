describe('Comprar itens do carrinho', () => {
  it('Clicar no carrinho para finalizar compra', () => {
    cy.visit('/')
    cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click()
       cy.wait(1000)
    cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
      cy.wait(1000)
    cy.get('#fname').type('Débora')
        cy.wait(1000)
    cy.get('#lname').type('Sampaio de Oliveira') 
       cy.wait(1000) 
    cy.get('#cname').type('Capgemini')
       cy.wait(1000)
    cy.get('#email').type('deborasampaio73@gmail.com')
       cy.wait(1000)
    cy.get('#country').select('Afghanistan');
      cy.wait(1000)
    cy.get('#city').select('Afghanistan');
       cy.wait(1000)
    cy.get('#zip').type(58102282)
       cy.wait(1000)
    cy.get('#faddress').type('Rua adauto henriques,59')
       cy.wait(2000)
    cy.get('#messages').type('Gostaria de deixar resgitrado que consegui um cupom OFF')
       cy.wait(1000)
    cy.get('#materialUnchecked').click()
        cy.wait(1000)
    cy.get('.checkout-area-bg > .theme-btn-one')
       cy.wait(1000)
    cy.get('#javascript')
       cy.wait(1000)
       //cy.get('button.theme-btn-one.btn-black-overlay.btn_sm').should('be.visible');
       cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()





    

  })

 
})