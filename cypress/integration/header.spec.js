/* Arrange - setup initial app state
 * - visit a web page
 * - query for an element
 * Act - take an action
 * - interact with that element
 * Assert - make an assertion
 * - make an assertion about the page content
*/

describe('Header area', () => {
  it('Clicking "About" link shows the about me page', () => {
    cy.visit('');
    cy.contains('About').click();

    // Should be on a new URL which includes '/about/'
    cy.url().should('include', '/about/')
  });

  it('Clicking on the logo-like text shows main page', () => {
    cy.visit('/about');
    cy.contains('Mihailizing').click();

    cy.url().should('include', '/')
  });

  it('Hovering on the logo-like text should change its color', () => {
    cy.visit(''); // Using baseUrl from cypress.json --> http://localhost:8000
    cy.get('[data-test=logo]').trigger('mouseenter');
    cy.get('[data-test=logo]').should('have.css', 'color').and('eq', 'rgb(159, 57, 43)')
  });

  it('There must be a horizontal line below', () => {
    cy.visit('');
    cy.get('[data-test=separator]').should('match', 'hr')
  })
});
