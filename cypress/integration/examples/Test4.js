/// <reference types="Cypress" />
 
describe('My fourth Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit(Cypress.env("url")+"/practice.php");

cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','qaclickacademy')
 
cy.go('back')
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )