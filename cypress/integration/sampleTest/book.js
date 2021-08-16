const book_URL = '/books/'

describe('books', () => {
  before(() => {
    cy.visit(book_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + book_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  })
})
