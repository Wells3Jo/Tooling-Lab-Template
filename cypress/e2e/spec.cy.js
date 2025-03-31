describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
    // at first, no option should be selected


// Select option(s) with matching text content
cy.get('.action-select').select('--Pick a name--')
// confirm the apples were selected
// note that each value starts with "fr-" in our HTML


cy.get('.action-yourname').type('ben')
cy.get('.action-yourname').should('have.value', 'ben')
cy.get('.action-select').select(['bill', 'bob', 'ben'])
cy.get('.action-select')
// when getting multiple values, invoke "val" method first
.invoke('val').should('deep.equal', ['fr-bill', 'fr-bob', 'fr-ben'])

// Select option(s) with matching value
cy.get('.action-select').select('fr-ben')


cy.get('.action-select').select(['fr-bill', 'fr-bob', 'fr-ben'])
cy.get('.action-select').invoke('val').should('deep.equal', ['fr-bill', 'fr-bob', 'fr-ben'])

// assert the selected values include oranges
cy.get('.action-select').invoke('val').should('include', 'fr-bob')
  })

  
})