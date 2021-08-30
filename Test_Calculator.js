// Test_Calculator.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Test Calculator Website', () => {
    beforeEach(() => {
      cy.visit('https://ahfarmer.github.io/calculator/')

    })

    it('Verify Number Button 1-9', () => {
        cy.contains('button','1').click()
        cy.contains('div','1')

        cy.contains('button','2').click()
        cy.contains('div','2')

        cy.contains('button','3').click()
        cy.contains('div','3')

        cy.contains('button','4').click()
        cy.contains('div','4')

        cy.contains('button','5').click()
        cy.contains('div','5')

        cy.contains('button','6').click()
        cy.contains('div','6')

        cy.contains('button','7').click()
        cy.contains('div','7')

        cy.contains('button','8').click()
        cy.contains('div','8')

        cy.contains('button','9').click()
        cy.contains('div','9')

        cy.contains('button','AC').click()
      })

    it('Verify Button +,-,*,/', () =>{

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('.orange > button','+').click()
        cy.contains('button','5').click()
        cy.contains('button','=').click()
        cy.contains('div','14')
        cy.contains('button','AC').click()

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('.orange > button','-').click()
        cy.contains('button','5').click()
        cy.contains('button','=').click()
        cy.contains('div','4')
        cy.contains('button','AC').click()

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('.orange > button','x').click()
        cy.contains('button','5').click()
        cy.contains('button','=').click()
        cy.contains('div','45')
        cy.contains('button','AC').click()

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('.orange > button','÷').click()
        cy.contains('button','5').click()
        cy.contains('button','=').click()
        cy.contains('div','1.8')
        cy.contains('button','AC').click()
    })
    it('Verify Divide By Zero', () =>{

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('.orange > button','÷').click()
        cy.contains('button','0').click()
        cy.contains('button','=').click()
        cy.contains('div','0')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('button','AC').click()
    })

    it('Verify Fuvtion Button AC', () =>{

        cy.contains('button','AC').click()
        cy.contains('button','9').click()
        cy.contains('div','0')
        cy.contains('button','AC').click()
    })
})
