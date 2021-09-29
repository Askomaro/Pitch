import {getPitchPageFactory} from "../factories/PitchPageFactory";

const homeButtonLocator = '.float-left > .nav_block';

// eslint-disable-next-line import/prefer-default-export
export const topNavigationBarMixin = {
  navigateToHomePage() {
    cy.get(homeButtonLocator)
        .click();

    return getPitchPageFactory().getHomePage();
  }
};
