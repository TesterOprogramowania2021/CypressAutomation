class HomePage
{

getEditBox()
{
   return cy.get(':nth-child(1) > .form-control');
}

getEmailAdress()
{
 return cy.get("input[name='email']");
}

getTwoWayBinding()
{
    return cy.get('.ng-untouched');
}

getGendre()
{
    return cy.get("select");
}

getEnterpreneur()
{
    return cy.get('#inlineRadio3');
}

getShopTab()
{
   return cy.get("a[href='/angularpractice/shop']");
}


}
export default HomePage;