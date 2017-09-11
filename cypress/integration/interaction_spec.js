describe('Interaction', function () {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('clicking the button adds a result', function () {
    cy.contains('Trigger!').click()
    cy.get('ul > li').as('items')
    cy.get('li').contains('42')
    cy.get('@items').should('have.length', 1)
  })

  it('clicking on the button again adds another result ', function () {
    cy.contains('Trigger!').click()
    cy.get('ul > li').as('items')
    cy.get('li').contains('42')
    cy.contains('Trigger!').click()
    cy.get('@items').should('have.length', 2)
  })
})