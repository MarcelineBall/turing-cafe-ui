describe('form functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to take data into the input', () => {
    cy.get('input[name="name"]')
      .type('Marceline')
      .should('have.value', 'Marceline')

    cy.get('input[name="date"]')
      .type('05/26')
      .should('have.value', '05/26')

    cy.get('input[name="time"]')
      .type('7:00 pm')
      .should('have.value', '7:00 pm')

    cy.get('input[name="guests"]')
      .type('3')
      .should('have.value', 3)
  })
})
