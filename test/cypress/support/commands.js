Cypress.Commands.add('getByDT', (dataTest, otherSelector = '') => {
  return cy.get(`${otherSelector}[data-test="${dataTest}"]`)
})
