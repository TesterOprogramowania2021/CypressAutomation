/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My fourth case',function() {
 
//alerts
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("#alertbtn").click();
cy.get("[value='Confirm']").click();
 //widnow alert
 cy.on("window:alert",(str)=>
 {
     //Mocha
     expect(str).to.equal("Hello , share this practice page and share your knowledge");
 })
 cy.on("window:confirm",(str)=>
 {
     //Mocha
     expect(str).to.equal("Hello , Are you sure you want to confirm?");
 })
 //delate atrubiut page to opene page in another window, now open in the same window 
 cy.get("#opentab").invoke("removeAttr","target").click();
 //back to normal/ first page
 cy.go("back");
 
 
 
 
 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )