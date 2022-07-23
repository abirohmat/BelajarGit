describe('MyTestSuite', function() 
{
    it('verify title of the page-Positive', function() 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
    })

    it('verify title of the page-Negative', function() 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce store')
    })

  })