import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";

export default class HomePage{
  createNewProjectButtonLocator = '.projects_controls > .createItem > .createItem_link > .createItem_title';
  projectTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createItemCloseButtonLocator = '.createItem_close';

  constructor() {
    mix(this, [topNavigationBarMixin]);
  }

  createNewProject(title) {
    cy.get(this.createNewProjectButtonLocator)
        .click();

    cy.get(this.projectTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    return getPitchPageFactory().getBoardsPage();
  }
}
