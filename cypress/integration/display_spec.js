describe('display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should display a form', () => {
    cy.get('input[name="name"]')
      .get('input[name="date"]')
      .get('input[name="time"]')
      .get('input[name="guests"]')
      .get('button')
  })

  it('should display reservation cards', () => {
    cy.get('.resy-container').children().should('have.length', 8)
      .get('.name').contains('Christie')
      .get('.date').contains('12/29')
      .get('.time').contains('5:45 pm')
      .get('.guests').contains('4')
      .get('article > button')
  })
})
