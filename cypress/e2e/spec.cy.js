describe('template spec', () => {
  it('loads homepage', () => {
    cy.visit('/')

    cy.wait(1000)
    cy.title().should('equal', 'Mealdrop - find your next meal')
  })

  it('creates a new order', () => {
    cy.visit('/restaurants/2')

    cy.wait(1000)

    cy.takeSnapshot()

    cy.contains('h4', 'Fries').click()

    cy.get('[data-testid="modal"]').should('be.visible')

    cy.takeSnapshot()

    cy.contains('button', /add for €2\.50/).click()

    cy.contains('[data-testid="header"] span', '€2.50').should('be.visible')
  })
})
