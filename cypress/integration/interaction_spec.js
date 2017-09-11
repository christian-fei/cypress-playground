describe('Interaction', function () {
  it('clicking the button adds a result', function () {
    // cy.visit('http://localhost:9000/index.html')
    cy.visit('/index.html')
    cy.get('button').click()
    cy.get('li').contains('42')
    cy.get('ul > li').as('items')
    cy.get('@items').should('have.length', 1)  
  })
})