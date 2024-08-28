// Test assertion reference: https://docs.cypress.io/guides/references/assertions
import testimonialData from '../../../frontend/src/view-data/testimonials-data'

const baseUrl = Cypress.config('baseUrl')
const toDT = str => `[data-test="${str}"]`

describe('1. Verify general features in Home page.', () => {
  it('1-1. Main section should contain all essential content.', () => {
    cy.visit(`/`)

    cy.getByDT('home-main-section', 'section').within(() => {
      cy.get(toDT('home-my-name')).should('contain', 'Sebin Song')
      cy.get('.intro-para .to-skill-page').should('have.length', 2)
        .each(($el, index) => {
          const texts = ['frontend', 'backend']
          cy.wrap($el).should('have.text', texts[index])
        })
    })
  })

  it('1-2. The page must have all sub-sections', () => {
    const sectionTitleList = [
      'A little about me..',
      'Outside the work..',
      'Testimonials',
      'Feedbacks on this website'
    ]

    cy.getByDT('home-section-title').should('have.length', sectionTitleList.length)
      .each(($headingEl, index) => {
        cy.wrap($headingEl).find('span.text').should('include.text', sectionTitleList[index])
      })
  })

  it('1-3. The testimonial list must have all items', () => {
    cy.getByDT('home-testimonial-list').within(() => {
      cy.get(toDT('testimonial-item')).should('have.length', testimonialData.length)
    })
  })
})
