describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
// confirm the apples were selected
// note that each value starts with "fr-" in our HTML

//Adds a player name
cy.get('.form-control').type('ben')
cy.get('.form-control').should('have.value', 'ben')

//Player hits start
cy.get('.btn-btn-primary').click()


//Player chooses with move to throw
cy.get('.custom-select').select('Scissors')
//Player hits go to submit their move
cy.get('.btn-btn-success').click()


})

  
})