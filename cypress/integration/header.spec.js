// Arrange - setup initial app state
// - visit a web page
// - query for an element
// Act - take an action
// - interact with that element
// Assert - make an assertion
// - make an assertion about the page content

describe('Header area', () => {
  it('clicking "About" link shows the about me page', () => {
    cy.visit('http://localhost:8000')
    cy.contains('About').click()
    // Should be on a new URL which includes '/about/'
    cy.url().should('include', '/about/')
  })

  it('clicking on the logo-like text shows main page', () => {
    cy.visit('http://localhost:8000/about')
    cy.contains('Mihailizing')
      .click()

    cy.url().should('include', '/')
  })

  it('hovering on the logo-like text should change its color', () => {
    cy.visit('http://localhost:8000')
    cy.get('[data-test="logo"]').trigger('mouseover')
    cy.pause()
    cy.get('[data-test="logo"]').should('have.css', 'color')
      .and('eq', 'rgb(0, 0, 0)')
  })
})
