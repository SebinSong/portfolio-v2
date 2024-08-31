// Test assertion reference: https://docs.cypress.io/guides/references/assertions
import testimonialData from '../../../frontend/src/view-data/testimonials-data'

const baseUrl = Cypress.config('baseUrl')
const toDT = str => `[data-test="${str}"]`
const getTestimonial = id => testimonialData.find(x => x.id === id)

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
        .each(($el, index) => {
          cy.wrap($el).invoke('attr', 'data-id').then(entryId => {
            const data = getTestimonial(entryId)

            cy.wrap($el).find('span.testimonial-name').should('include.text', data.name)
            cy.wrap($el).find('span.company').should('include.text', data.organization)
          })
        })
    })
  })

  // TODO: Add test here that verifies feedback section of the page.
  it('1-4. The feedback section must have all items and the CRUD operation must work as expected', () => {
    cy.request({
      url: 'api/feedbacks',
      method: 'GET'
    }).then(response => {
      expect(response.body).to.be.an('array')
      
      const feedbackItems = response.body
      cy.getByDT('home-feedback-list').within(() => {
        feedbackItems.forEach(entry => {
          const { _id: id, name } = entry
          cy.getByDT(`home-feedback-item-${id}`).as(`feedback-${id}`)

          cy.get(`@feedback-${id}`).find('.feedback-details .name-val').should('include.text', name)
        })
      })
    })
  })

  it('1-5. The navigation menu must work as expected.', () => {
    const routeIdArr = ['resume', 'skills', 'contact', 'home']

    routeIdArr.forEach(routeId => {
      cy.navigateTo(routeId)
    })
  })
})
