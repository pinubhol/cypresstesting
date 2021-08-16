const book_URL = '/books/'

describe('books', () => {
  before(() => {
    cy.visit(book_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + book_URL)
  })

  it('should search the word you', () => {
    cy.get('.form-control')
      .type('you {enter}')
  })
  it('should click login', () => {
    cy.get('.btn btn-primary')
      .click()
  })
})
