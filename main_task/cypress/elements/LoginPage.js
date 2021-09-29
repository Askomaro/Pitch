import {getPitchPageFactory} from "./factories/PitchPageFactory";

export default class LoginPage {
  loginButtonLocator = '.login_test';

  constructor() {
    cy.visit('/');
  }

  enterAsGuest() {
    cy.get(this.loginButtonLocator)
        .click();

    return getPitchPageFactory().getHomePage();
  }
}
