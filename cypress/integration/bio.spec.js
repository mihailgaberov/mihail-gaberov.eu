/* Arrange - setup initial app state
 * - visit a web page
 * - query for an element
 * Act - take an action
 * - interact with that element
 * Assert - make an assertion
 * - make an assertion about the page content
*/

describe('Bio area', () => {
  it('should have a rounded picture', () => {
    cy.visit('');
    cy.get('[data-test=profile-pic]').should('have.css', 'border-radius').and('eq', '50%');
  });

  it('should render paragraph with short text', () => {
    cy.visit('');
    cy.get('p').should('contain', 'Personal blog by Mihail Gaberov. Learning by sharing.');
  });

  it('should render a link to LinkedIn', () => {
    cy.visit('');
    cy.get('a')
      .contains('Mihail Gaberov')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/mihail-gaberov-6a73b03a/')
  });
});
