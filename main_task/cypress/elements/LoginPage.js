import MainPage from "./MainPage";

export default class LoginPage {
  loginButtonLocator = '.login_test';

  constructor() {
    cy.visit('/');
  }

  enterAsGuest() {
    cy.get(this.loginButtonLocator)
        .click();

    return new MainPage();
  }
}
