/// <reference types="cypress" />
 describe("My first test suite",function()
 {
    it("My first test case", function(){

        cy.visit(Cypress.env("url")+"/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productLocarot')
        cy.get('.product:visible').should('have.length',4);
        cy.get('@productLocarot').find('.product').should('have.length',4);
        cy.get('@productLocarot').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log("sf")
        })


        cy.get('@productLocarot').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text();
        if(textVeg.includes("Cashews")){
            $el.find("button").click();
        }    
        })
        cy.get('.brand').should("have.text","GREENKART");


        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text());
        })
       // cy.log(logo.text());



       // fixture


})


 })