describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
    // at first, no option should be selected
cy.get('.action-select')
.should('have.value', '--Pick a name--')

// Select option(s) with matching text content
cy.get('.action-select').select('--Pick a name--')
// confirm the apples were selected
// note that each value starts with "fr-" in our HTML
cy.get('.action-select').should('have.value', '--Pick a name--')

cy.get('.action-yourname').type('ben')
cy.get('.action-yourname').should('have.value', 'ben')
  })

  
})