/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from "../../support/pegeObjects/HomePage"
import ShopPage from "../../support/pegeObjects/ShopPage"

describe("Framework test ",function(){

    before(function(){
        cy.fixture("example").then(function(data){

                this.data = data;
        })


    })

    it("My first framework test", function(){
        

        const homePage = new HomePage();
        const shopPage = new ShopPage();

        cy.visit(Cypress.env("url")+"/angularpractice/");
        homePage.getEditBox().type(this.data.name);
        homePage.getEmailAdress().type(this.data.email);
        homePage.getGendre().select(this.data.gender);
        homePage.getTwoWayBinding().should("have.value",this.data.name);
        homePage.getEditBox().should("have.attr", "minlength", "2");
        homePage.getEnterpreneur().should("be.disabled");
        homePage.getShopTab().click();      
        this.data.productName.forEach(element => cy.selectProduct(element));
        Cypress.config("defaultCommandTimeout",8000);
       

        shopPage.getCheckOut().click();
        let sum = 0;
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list)=>{
            
            const actualText = $el.text();
            let res = actualText.split(" ");
            res = res[1].trim();
            sum = Number(sum) + Number(res);
          
        }).then(function(){
            cy.log(sum);

        });

        cy.get("tr td h3 strong").then(function(element){
            const sum2 = element.text();
            let sum3 = sum2.split(" ");
            let total = sum3[1].trim(); 
            expect(Number(total)).to.equal(sum);
        })
        cy.contains("Checkout").click();
        cy.get("#country").type("India");
        cy.get(".suggestions > ul > li > a").click();
        cy.get("#checkbox2").click({force: true});
        cy.contains("Purchase").click();
        // cy.get('.alert').should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).");
        cy.get(".alert").then(function(element){
            const actualText = element.text();
            expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true;
        })
    })



})