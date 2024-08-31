const toolbarMenuList = [
  { id: 'home', name: 'Home', routeTo: '/', dataTest: 'nav-home', pageClass: 'page-home' },
  { id: 'resume', name: 'Resume', routeTo: '/resume', dataTest: 'nav-resume', pageClass: 'page-resume' },
  { id: 'skills', name: 'Skills', routeTo: '/skills', dataTest: 'nav-skills', pageClass: 'page-skills' },
  { id: 'contact', name: 'Contact', routeTo: '/contact', dataTest: 'nav-contact', pageClass: 'page-contact' }
]

Cypress.Commands.add('getByDT', (dataTest, otherSelector = '') => {
  return cy.get(`${otherSelector}[data-test="${dataTest}"]`)
})

Cypress.Commands.add('navigateTo', (routeId) => {
  const found = toolbarMenuList.find(entry => entry.id === routeId)

  cy.get('body').scrollTo(0)
  cy.getByDT(found.dataTest).should('include.text', found.name).invoke('click')
  cy.url().then(url => {
    expect(url).to.satisfy(url => url.endsWith(found.routeTo))
    cy.get(`.${found.pageClass}`).should('exist')
  })
})
