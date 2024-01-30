describe('Clicar em um item e colocar no carrinho', () => {
  it('passes', () => {
    cy.visit('https://www.automationpratice.com.br/electronics')
    cy.get('#video > .row > :nth-child(2) > .product_item_two').click()
    cy.get('.customs_sel_box').select('M')
    cy.get('.customs_sel_box', { timeout: 10000 }).should('exist').should('be.visible');
    cy.get('select[name="product"]').select('M'); // Substitua 'M' pelo texto da opção que deseja selecionar
    cy.get('.product-color-green').click()
    cy.get(':nth-child(3) > .button > .fa').click().click().click()
    cy.get('.links_Product_areas > .theme-btn-one').click()
    cy.get('#swal2-title').should('not.exist');
    


  })
})