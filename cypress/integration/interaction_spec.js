/* globals describe beforeEach it cy */

describe('Interaction', function () {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('clicking the button adds a result', function () {
    cy.contains('Trigger!').click()
    cy.get('ul > li').as('items')
    cy.get('li').contains(`😱`)
    cy.get('@items').should('have.length', 1)
  })

  it('clicking on the button again adds another result ', function () {
    cy.contains('Trigger!').click()
    cy.contains('Trigger!').click()
    cy.get('ul > li').as('items')
    cy.get('@items').should('have.length', 2)
  })

  it('show a cat', function () {
    cy.get('img').should('not.be.visible')
    cy.contains('Show me a cat!').click()
    cy.get('img').should('be.visible')
  })
})
