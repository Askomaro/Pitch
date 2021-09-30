export default class BasePage {
  loaderSpinnerLocator = '.pageSpinner';
  navLoaderSpinnerLocator = '.nav_spinner';
  route = '';

  loaderSpinnerIsInvisible() {
    cy.get(this.loaderSpinnerLocator)
        .should('not.be.visible');

    return this;
  }

  navLoaderSpinnerIsInvisible() {
    cy.get(this.navLoaderSpinnerLocator)
        .should('not.be.visible');

    return this;
  }

  setPostResponseAlias(pageRoute) {
    this.route = pageRoute;
    cy.intercept('POST', pageRoute)
        .as(pageRoute);

    return this;
  }

  waitForPostResponseAlias() {
    cy.wait(`@${this.route}`);

    return this;
  }

  _getWEsText(locator, parentWE=null) {
    let res = [];

    if(parentWE){
      parentWE.find(locator).each((element => {
        res.push(element.text());
      }));
    } else {
      cy.get(locator).each((element => {
        res.push(element.text());
      }));
    }

    return cy.wrap(res);
  }
}
