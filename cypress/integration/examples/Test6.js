/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
    cy.visit(Cypress.env("url")+"/AutomationPractice/");
    cy.get('div.mouse-hover-content').invoke("show");
    cy.contains("Top").click();
    cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/");
 
 
})
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
