const baseUrl = Cypress.config('baseUrl')

describe('Verify general features in Home page and navigation menu', () => {
  it('visit home page', () => {
    cy.visit(`${baseUrl}/`)
    cy.getByDT('home-my-name').should('contain', 'Sebin Song')
  })
})
