/// <reference types="cypress" />
 describe("My secend test suite",function()
 {
    it("My secend test case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productLocarot');
        cy.get('@productLocarot').find('.product').should('have.length',4);
        cy.get('@productLocarot').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log("sf");
        })


        cy.get('@productLocarot').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text();
        if(textVeg.includes("Cashews")){
            $el.find("button").click();
        }    
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
  


      


})


 })