/* Arrange - setup initial app state
 * - visit a web page
 * - query for an element
 * Act - take an action
 * - interact with that element
 * Assert - make an assertion
 * - make an assertion about the page content
*/

describe('Bio area', () => {
  beforeEach(() => {
    cy.visit('')
  });

  it('should have bottom margin of 2.88rem', () => {
    cy.get('[data-test=bio]').should('have.css', 'margin-bottom').and('eq', '51.84px');
  });

  it('should have a rounded picture', () => {
    cy.get('[data-test=profile-pic]').should('have.css', 'border-radius').and('eq', '50%');
  });

  it('should render paragraph with short text', () => {
    cy.get('p').should('contain', 'Personal blog by Mihail Gaberov. Learning by sharing.');
  });

  it('should render a link to LinkedIn', () => {
    cy.get('a')
      .contains('Mihail Gaberov')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/mihail-gaberov-6a73b03a/')
  });
});
