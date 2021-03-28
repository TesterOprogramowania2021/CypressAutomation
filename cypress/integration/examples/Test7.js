/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
    cy.visit(Cypress.env("url")+"/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe("a[href*='mentorship']").eq(0).click();
  
  
 
})
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
