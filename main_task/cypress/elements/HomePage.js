import {getPitchPageFactory} from "./factories/PitchPageFactory";
import {mix} from "../helpers/mix";
import {topNavigationBarMixin} from "./mixins/topNavigationBarMixin";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  createNewProjectButtonLocator = '.projects_controls > .createItem > .createItem_link > .createItem_title';
  projectTitleInputLocator = '.createItem_input';
  createItemButtonLocator = '.createItem_submit';
  createItemCloseButtonLocator = '.createItem_close';
  projectsTitleLabelLocator = '.projects_title';

  route = 'projects';

  constructor() {
    super();

    mix(this, [topNavigationBarMixin]);
  }

  createNewProject(title) {
    this.setPostResponseAlias(this.route);

    cy.get(this.createNewProjectButtonLocator)
        .click();

    cy.get(this.projectTitleInputLocator)
        .type(title);

    cy.get(this.createItemButtonLocator)
        .click();

    this.waitForPostResponseAlias();

    return getPitchPageFactory().getBoardsPage();
  }

  getProjectTitles(){
    return this._getWEsText(this.projectsTitleLabelLocator);
  }

  openProject(title) {
    cy.contains(title)
        .click();

    return getPitchPageFactory().getBoardsPage();
  }
}
